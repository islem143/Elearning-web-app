import{_ as d,g as a,o as i,c as r,a as t,t as l,F as c,j as u}from"./index.ae1caef1.js";const h={name:"CourseDetail",data(){return{id:null,courseId:null,moduleId:null,info:{title:"",description:"",img_url:""},attachments:[]}},created(){let e=this.$route.params.moduleId,s=this.$route.params.courseId;this.courseId=s,this.moduleId=e,this.getCourse()},methods:{getCourse(){a.get("/api/module/"+this.moduleId+"/course/"+this.courseId).then(e=>{this.info=e.data,a.get("/api/media/"+this.courseId).then(s=>{this.attachments=s.data})})}}},p={class:"card pt-0 px-0 p-fluid bg-white"},_={class:"p-4 text-white border-round-top m-0 bg-blue-300"},m={class:"p-5"},f={class:""},I=t("h4",null,"Attachments:",-1),g=["href"],v=t("div",{class:"p-5"},[t("div",{class:""},[t("h4",null,"Quiz:")])],-1);function x(e,s,C,b,o,B){return i(),r("div",p,[t("div",_,[t("h3",null,"Course: "+l(o.info.title),1),t("p",null,l(o.info.description),1)]),t("div",m,[t("div",f,[I,(i(!0),r(c,null,u(o.attachments,n=>(i(),r("p",null,[t("a",{href:"http://localhost:8081/"+n.url},l(n.name),9,g)]))),256))])]),v])}const $=d(h,[["render",x]]);export{$ as default};
