import{_ as r,j as l,o as c,c as d,b as e,w as i,a as _,r as o}from"./index.72b1626b.js";const u={name:"LogList",data(){return{logs:[]}},created(){l.get("/api/logs").then(a=>{this.logs=a.data})}},m=_("h2",null,"Student Log History:",-1);function p(a,f,h,g,s,L){const t=o("Column"),n=o("DataTable");return c(),d("div",null,[m,e(n,{class:"mt-5",value:s.logs,responsiveLayout:"scroll"},{default:i(()=>[e(t,{field:"user_id",header:"id"}),e(t,{field:"user_name",header:"User Name"}),e(t,{field:"role",header:"Role"}),e(t,{field:"created_at",header:"Last Login"})]),_:1},8,["value"])])}const x=r(u,[["render",p]]);export{x as default};