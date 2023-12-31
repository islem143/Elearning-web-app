<template>
  <div class="col-12">
    <div class="card">
      <h3>Modules</h3>
      <div class="flex align-items-center">
        <router-link v-if="role == 'teacher'" :to="{ name: 'module-create' }">
          <Button
            label="New Module"
            icon="pi pi-plus"
            class="p-button-success mr-2"
            @click="openNew"
          />
        </router-link>
        <div class="p-input-icon-right col-4">
          <i class="pi pi-search" />
          <InputText
            type="text"
            class="w-full"
            v-model="search"
            placeholder="Search"
            @input="getModules"
          />
        </div>
      </div>
      <p class="mt-4 text-2xl" v-if="data.length == 0 && search">
        No match found for "{{ search }}".
      </p>
      <module-cards
        :mylist="false"
        @edit-module="editModule"
        @confirm-delete-module="confirmDeleteModule"
        @go-to="goTo"
        @enroll="enroll"
        :modules="data"
      />

      <Dialog
        v-model:visible="deleteModuleDialog"
        :style="{ width: '450px' }"
        header="Confirm"
        :modal="true"
      >
        <div class="confirmation-content">
          <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
          <span>Are you sure you want to delete the selected module?</span>
        </div>
        <template #footer>
          <Button
            label="No"
            icon="pi pi-times"
            class="p-button-text"
            @click="deleteModuleDialog = false"
          />
          <Button
            label="Yes"
            icon="pi pi-check"
            class="p-button-text"
            @click="deleteModule"
          />
        </template>
      </Dialog>
      <Paginator :rows="3" @page="list" :totalRecords="count"></Paginator>
    </div>
  </div>
</template>

<script>
import axios from "../../http";
import ModuleCards from "./ModulesCard.vue";
export default {
  inject: ["role"],
  components: {
    ModuleCards,
  },
  data() {
    return {
      selectedModule: null,
      deleteModuleDialog: false,
      data: [],
      search: "",
      layout: "grid",
      sortKey: null,
      sortOrder: null,
      sortField: null,
      page: 0,
      count: 0,
      sortOptions: [
        { label: "Price High to Low", value: "!price" },
        { label: "Price Low to High", value: "price" },
      ],
    };
  },

  created() {
    this.getModules();
    axios.get("/api/module/count").then((res) => {
      this.count = res.data.count;
    });
  },

  methods: {
    list(e) {
      this.page = e.page;
      this.getModules();
    },
    enroll(module) {
      axios.post("/api/module/join", { moduleId: module.id }).then((res) => {
        this.$toast.add({
          severity: "success",
          summary: "you have been entrolled to this module ",

          life: 3000,
        });
        this.getModules();

      });
    },
    getModules() {
      let params = { title: this.search, page: this.page + 1 };
      if (!this.role) {
        axios.get("/api/modules", { params }).then((res) => {
          this.data = res.data.data;
        });
        return;
      }
      axios
        .get("/api/module", { params })
        .then((res) => {
          console.log(res.status);
          this.data = res.data.data;
          if (this.role == "student") {
            this.data.forEach((d) => {
              axios
                .get("/api/module/" + d.id + "/completedCourses")
                .then((res) => {
                  d.totalCourses = res.data.totalCourse;
                  d.completedCourses = res.data.completedCourses;
                });
            });
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    src(info) {
      console.log(info);
      return info.img_url.split("/")[2];
    },
    goTo(data) {
      this.$router.push({
        name: "module-detail",
        params: { moduleId: data.id },
      });
    },
    editModule(data) {
      if (this.role == "teacher") {
        this.$router.push({
          name: "module-edit",
          params: { moduleId: data.id },
        });
      }
    },
    async deleteModule() {
      await axios
        .delete("/api/module/" + this.selectedModule.id)
        .then((res) => {
          this.deleteModuleDialog = false;
          let index = this.data.findIndex(
            (d) => d.id == this.selectedModule.id
          );
          this.data.splice(index, 1);
        });
    },

    confirmDeleteModule(data) {
      this.deleteModuleDialog = true;
      this.selectedModule = data;
    },
    onSortChange(event) {
      const value = event.value.value;
      const sortValue = event.value;

      if (value.indexOf("!") === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
        this.sortKey = sortValue;
      } else {
        this.sortOrder = 1;
        this.sortField = value;
        this.sortKey = sortValue;
      }
    },
  },
};
</script>

<style scoped lang="scss">
//@import '../assets/demo/badges.scss';
</style>
