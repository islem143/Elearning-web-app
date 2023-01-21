import{_ as m,s as M,c as n,a,b as d,t as o,r as p,o as i,p as u,d as C,e as z}from"./index.ae1caef1.js";const g={name:"Register",data(){return{info:{name:"",email:"",password:"",password_confirmation:"",error:""},nameError:"",emailError:"",passwordError:""}},computed:{logoColor(){return this.$appState.darkTheme?"white":"dark"}},methods:{clearErrors(){this.emailError="",this.nameError="",this.passwordError=""},login(){M.dispatch("auth/register",this.info).then(()=>{this.$toast.add({severity:"success",summary:"Account was created successfully.",life:3e3}),this.$router.push({name:"login"})}).catch(s=>{for(const c in s.errors)this[c+"Error"]=s.errors[c].toString()})}}},e=s=>(u("data-v-38a8b13a"),s=s(),C(),s),_={class:"surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},f={class:"grid justify-content-center p-2 lg:p-0 align-items-center",style:{"min-width":"80%"}},w={class:"col-12 xl:col-6"},x={width:"900",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 1080 1080",style:{"enable-background":"new 0 0 1080 1080"},"xml:space":"preserve"},y=z('<g class="st0" data-v-38a8b13a><g data-v-38a8b13a><path class="st1" d="M737.2,536.1c6.6,12.1,16.3,23.5,17.1,37.1c1.3,21.9-20,38.3-28.7,58.6c-10.7,24.9-1.7,54.2-11.2,79.5    c-6.9,18.3-23.7,33-43.5,37.8c-14.8,3.6-30.4,2-45.7,2.1c-43.4,0.4-86.7,15.4-129.6,8.6c-21.2-3.4-41.2-12-62.4-14.7    c-25.5-3.3-55.2,0.7-73.4-16.6c-25.5-24.2-6.6-68.7-25.7-97.7c-6.2-9.4-16.1-16.7-19.4-27.2c-3.9-12.4,2.4-25.5,10.2-36.1    c7.8-10.5,17.5-20.2,21.7-32.5c3.8-11.1,1.5-23.2-3.2-34c-7.2-16.6,12.9-54.6,52.9-51.7c18.3,1.3,26.6-19.9,46.7-25.8    c23-6.7,51.9-1.3,68.8,4.3c17.2,5.7,38.5,8.7,48.4-5.9c13.9-20.7,55.5-23.9,74.2,9.7c6.8,12.2,12.9,21.8,27.4,20.8    C740.4,447.3,727.3,518.2,737.2,536.1z M522.9,422.8c0,2.8,0,7.6,12.4,6.8c3.8-0.2,6.9-2.3,6.9-5.1c0-2.8-3.1-5.1-6.9-5.1    C531.5,419.5,522.9,418.3,522.9,422.8z M400.8,436.5c-0.4,0.2-0.6,0.6-0.8,1c-0.8,1.2-2.2,2-3.6,2.6c-0.8,0.3-1.7,0.6-2.3,1.2    c-1,1-0.9,2.8,0.2,3.6c0.9,0.7,2.1,0.8,3.3,0.7c4.3-0.2,8.5-1.8,11.9-4.4C413.8,437.7,403.2,435.2,400.8,436.5z M389,442.9    c-1.5-1-3.3-0.4-4.8,0.3c-0.3,0.2-0.6,0.4-0.7,0.7c-0.2,0.7,0.7,1.2,1.4,1.4c1.1,0.3,2.3,0.7,3.4,0.3    C389.4,445.3,390.5,443.9,389,442.9z M334.2,532.6c-1.1-3.3-3.6-4.9-7.5-3c-2.3,1.1-3.9,3.2-5.3,5.3c-2.2,3.4-4.1,7.2-3.6,11.1    c0.3,2.9,2,5.6,4.4,7.3c1,0.7,2.2,1.2,3.4,1.2c1.4,0,2.6-0.8,3.7-1.6c2.5-1.9,4.4-4.5,6.3-6.9c1-1.3,2-2.7,2.2-4.2    C338.3,538.3,335.2,535.6,334.2,532.6z M736.2,633.6c-1,0.4-2,0.9-2.5,1.8c-0.4,0.7-0.6,1.5-0.6,2.3c-0.2,1.7-0.3,3.3-0.3,5    c0,1.8,0.2,3.8,1.6,5.1c1.9,1.7,4.9,1.1,7.3,0.4c1.4-0.4,2.9-0.8,3.8-1.9c0.7-0.8,0.9-1.8,1.1-2.8c0.6-3.3,2.4-8.3,0.4-10.1    C744.8,631.6,739.7,632.2,736.2,633.6z M597.3,762c-0.5,0.5-1,1-1.3,1.6c-0.8,1.7,0,3.9,1.8,4.6c0.9,0.4,1.9,0.4,2.9,0.3    c8.3-0.1,17.2-0.4,23.8-5.2c0.8-0.6,1.6-1.4,1.5-2.3c-0.2-1.2-1.6-1.7-2.8-1.9C614.9,757.6,603.9,755.8,597.3,762z M440.3,749.2    c-7.2-1-18.6-2.3-18.6,3.5c0,2.2,10.2,4.3,11.8,4.7c5.2,1.3,10.1,3.1,15.1,5c9.4,3.5,17-1.2,9.5-6.5    C452,751.6,446.1,750,440.3,749.2z" data-v-38a8b13a></path></g></g><g class="st2" data-v-38a8b13a><path class="st3" d="M622.3,677c-2.3-4.4,3-9.1,7.9-10c4.9-0.9,10.4-0.2,14.2-3.3c5.2-4.1,4.9-13,10.6-16.3   c4.6-2.6,10.7-0.1,15.5-2.2c6-2.6,7.7-11,13.7-13.8c4.7-2.3,10.9,0.3,13.3,4.9c2.4,4.6,1.3,10.6-2,14.7c-2.6,3.1-6.5,5.4-8.1,9.1   c-2.5,5.9,1.5,13-0.9,19c-4.3,11-24.7,7.7-28.3,19c-0.8,2.5-0.5,5.2-0.7,7.9c-0.6,7.8-6.1,14.6-12.9,18.5   c-6.8,3.9-14.8,5.2-22.6,5.8c-3.2,0.2-6.6,0.3-9.4-1.2c-2.7-1.4-4.5-3.9-6-6.6C597.2,705.6,593.3,683.4,622.3,677" data-v-38a8b13a></path></g><g class="st2" data-v-38a8b13a><path class="st3" d="M470,661.7c3.2-5.2-2.8-11.4-8.7-12.9c-5.9-1.5-12.6-1.2-17.1-5.3c-5.9-5.5-4.8-16.4-11.5-20.9   c-5.4-3.6-13-1.1-18.8-4.1c-7.2-3.7-8.4-14.2-15.4-18.2c-5.6-3.2-13.4-0.7-16.8,4.8c-3.4,5.5-2.6,12.9,1.1,18.2   c2.9,4.1,7.4,7.2,9.1,11.9c2.6,7.4-3,15.8-0.7,23.3c4.3,13.9,29.6,11.7,32.8,25.9c0.7,3.2,0.1,6.4,0.1,9.7   c0,9.6,6.1,18.5,14.1,23.9c8,5.4,17.6,7.8,27.1,9.2c3.9,0.6,8,1,11.6-0.6c3.4-1.4,5.9-4.4,8-7.5C498,699,504.8,672.2,470,661.7" data-v-38a8b13a></path></g><path class="st3" d="M679.2,421.3l-7,2.4l-3-8.7c-5.6-16.1-23.3-24.7-39.4-19.1c-16.1,5.6-24.7,23.3-19.1,39.4l3,8.7l-7,2.4  c-5.5,1.9-8.4,7.9-6.5,13.4l19.7,56.9c1.9,5.5,8,8.5,13.4,6.6l72.4-25.1c5.5-1.9,8.5-8,6.6-13.5l-19.7-56.9  C690.8,422.3,684.8,419.3,679.2,421.3z M624,430.6c-3.1-8.8,1.6-18.5,10.4-21.6c8.8-3.1,18.5,1.6,21.6,10.5l3,8.7l-32,11.1  L624,430.6z M666,482.5l5,14.5c0.2,0.6-0.2,1.2-0.8,1.5l-7,2.4c-0.5,0.2-1.2-0.1-1.4-0.7l-5-14.5c-5.4-0.2-10.4-3.6-12.3-9.1  c-2.4-7,1.3-14.7,8.3-17.2c7-2.4,14.7,1.3,17.2,8.3C671.9,473.2,670.1,479,666,482.5z" data-v-38a8b13a></path><g data-v-38a8b13a><g data-v-38a8b13a><path class="st3" d="M604.1,703c7.1-3,13.4-8.7,18.7-14.1c14.2-14.7,23-33.8,27.7-53.6c4.2-17.9,5.1-36.3,4.3-54.6    c-0.1-1.5-2.5-1.6-2.4,0c2,41.1-6.2,91.4-42.9,116.4c-2.1,1.4-4.2,2.8-6.5,3.8C601.5,701.5,602.7,703.6,604.1,703L604.1,703z" data-v-38a8b13a></path></g><path class="st3" d="M650.8,628.4c0,0,2.3-13.3,19.9-15.4C670.8,613,664.3,628.7,650.8,628.4z" data-v-38a8b13a></path><path class="st3" d="M645.1,648c0,0,5.4-12.4,23-10.3C668,637.7,658.1,651.5,645.1,648z" data-v-38a8b13a></path><path class="st3" d="M637.6,665.4c0,0,8-10.9,24.7-4.9C662.3,660.5,649.5,671.7,637.6,665.4z" data-v-38a8b13a></path><path class="st3" d="M653.5,607.7c0,0,2.3-13.1,19.6-15.1C673.1,592.6,666.8,608.1,653.5,607.7z" data-v-38a8b13a></path><path class="st3" d="M653.8,585c0,0-9.9-8.9-2.4-24.7C651.4,560.4,661.1,573.9,653.8,585z" data-v-38a8b13a></path><path class="st3" d="M653.8,598.5c0,0-13.1-2.4-15-19.7C638.9,578.7,654.3,585.2,653.8,598.5z" data-v-38a8b13a></path><path class="st3" d="M652.5,618.4c0,0-13.1-2.4-15-19.7C637.6,598.7,653,605.1,652.5,618.4z" data-v-38a8b13a></path><path class="st3" d="M649.1,637.1c0,0-12.9-3.3-13.5-20.7C635.6,616.3,650.5,623.8,649.1,637.1z" data-v-38a8b13a></path><path class="st3" d="M643.2,655.7c0,0-12.9-3.3-13.5-20.7C629.7,635,644.6,642.5,643.2,655.7z" data-v-38a8b13a></path></g><g data-v-38a8b13a><g data-v-38a8b13a><path class="st3" d="M470.3,698c-7.1-3-13.4-8.7-18.7-14.1c-14.2-14.7-23-33.8-27.7-53.6c-4.2-17.9-5.1-36.3-4.3-54.6    c0.1-1.5,2.5-1.6,2.4,0c-2,41.1,6.2,91.4,42.9,116.4c2.1,1.4,4.2,2.8,6.5,3.8C472.9,696.5,471.7,698.6,470.3,698L470.3,698z" data-v-38a8b13a></path></g><path class="st3" d="M423.6,623.4c0,0-2.3-13.3-19.9-15.4C403.6,608,410.1,623.7,423.6,623.4z" data-v-38a8b13a></path><path class="st3" d="M429.4,643c0,0-5.4-12.4-23-10.3C406.4,632.7,416.3,646.5,429.4,643z" data-v-38a8b13a></path><path class="st3" d="M436.9,660.4c0,0-8-10.9-24.7-4.9C412.1,655.5,424.9,666.7,436.9,660.4z" data-v-38a8b13a></path><path class="st3" d="M420.9,602.7c0,0-2.3-13.1-19.6-15.1C401.3,587.6,407.6,603.1,420.9,602.7z" data-v-38a8b13a></path><path class="st3" d="M420.7,580c0,0,9.9-8.9,2.4-24.7C423.1,555.4,413.3,568.9,420.7,580z" data-v-38a8b13a></path><path class="st3" d="M420.6,593.5c0,0,13.1-2.4,15-19.7C435.6,573.7,420.1,580.2,420.6,593.5z" data-v-38a8b13a></path><path class="st3" d="M421.9,613.4c0,0,13.1-2.4,15-19.7C436.9,593.7,421.4,600.1,421.9,613.4z" data-v-38a8b13a></path><path class="st3" d="M425.3,632.1c0,0,12.9-3.3,13.5-20.7C438.8,611.3,423.9,618.8,425.3,632.1z" data-v-38a8b13a></path><path class="st3" d="M431.2,650.7c0,0,12.9-3.3,13.5-20.7C444.7,630,429.8,637.5,431.2,650.7z" data-v-38a8b13a></path></g><g data-v-38a8b13a><path class="st1" d="M596.9,732.8H483.6c-11.7,0-21.1-9.5-21.1-21.1V449c0-11.7,9.5-21.1,21.1-21.1h113.2   c11.7,0,21.1,9.5,21.1,21.1v262.7C618,723.3,608.5,732.8,596.9,732.8z" data-v-38a8b13a></path><path class="st4" d="M596,722H484.5c-8.2,0-14.8-6.6-14.8-14.8V451.6c0-8.2,6.6-14.8,14.8-14.8H596c8.2,0,14.8,6.6,14.8,14.8v255.6   C610.8,715.4,604.2,722,596,722z" data-v-38a8b13a></path><path class="st1" d="M582.5,436.8h-9.2c-2.8,0-5.1,2.3-5.1,5.1v3.6c0,2.8-2.3,5.1-5.1,5.1h-40.9c-2.8,0-5.1-2.3-5.1-5.1v-3.6   c0-2.8-2.3-5.1-5.1-5.1h-26.1v-2.6h96.6V436.8z" data-v-38a8b13a></path><g data-v-38a8b13a><circle class="st5" cx="538.3" cy="536.6" r="20.4" data-v-38a8b13a></circle><g data-v-38a8b13a><defs data-v-38a8b13a><circle id="SVGID_1_" cx="538.3" cy="536.6" r="20.4" data-v-38a8b13a></circle></defs><clipPath id="SVGID_2_" data-v-38a8b13a><use xlink:href="#SVGID_1_" style="overflow:visible;" data-v-38a8b13a></use></clipPath><path class="st6" d="M546.2,531.9c0,4.4-3.5,7.9-7.9,7.9c-4.4,0-7.9-3.5-7.9-7.9c0-4.4,3.5-7.9,7.9-7.9     C542.7,524,546.2,527.5,546.2,531.9z M550.2,564.4v-11.3c0-6.3-5.1-11.5-11.5-11.5h-0.9c-6.3,0-11.5,5.1-11.5,11.5v11.3     c0,1.8,1.4,3.2,3.2,3.2H547C548.8,567.6,550.2,566.2,550.2,564.4z" data-v-38a8b13a></path></g></g><path class="st5" d="M587.2,580.3h-97.8c-4.5,0-8.1-3.6-8.1-8.1l0,0c0-4.5,3.6-8.1,8.1-8.1h97.8c4.5,0,8.1,3.6,8.1,8.1l0,0   C595.3,576.6,591.7,580.3,587.2,580.3z" data-v-38a8b13a></path><path class="st1" d="M583.8,574.3h-91c-1.2,0-2.1-0.9-2.1-2.1l0,0c0-1.2,0.9-2.1,2.1-2.1h91c1.2,0,2.1,0.9,2.1,2.1l0,0   C585.9,573.3,585,574.3,583.8,574.3z" data-v-38a8b13a></path><path class="st5" d="M587.3,609.3h-97.8c-4.5,0-8.1-3.6-8.1-8.1l0,0c0-4.5,3.6-8.1,8.1-8.1h97.8c4.5,0,8.1,3.6,8.1,8.1l0,0   C595.4,605.7,591.7,609.3,587.3,609.3z" data-v-38a8b13a></path><path class="st1" d="M492,603.5L492,603.5c-1.2,0-2.1-0.9-2.1-2.1l0,0c0-1.2,0.9-2.1,2.1-2.1l0,0c1.2,0,2.1,0.9,2.1,2.1l0,0   C494.1,602.6,493.1,603.5,492,603.5z M500.4,601.4L500.4,601.4c0-1.2-0.9-2.1-2.1-2.1l0,0c-1.2,0-2.1,0.9-2.1,2.1l0,0   c0,1.2,0.9,2.1,2.1,2.1l0,0C499.4,603.5,500.4,602.6,500.4,601.4z M506.6,601.4L506.6,601.4c0-1.2-0.9-2.1-2.1-2.1l0,0   c-1.2,0-2.1,0.9-2.1,2.1l0,0c0,1.2,0.9,2.1,2.1,2.1l0,0C505.7,603.5,506.6,602.6,506.6,601.4z M512.9,601.4L512.9,601.4   c0-1.2-0.9-2.1-2.1-2.1l0,0c-1.2,0-2.1,0.9-2.1,2.1l0,0c0,1.2,0.9,2.1,2.1,2.1l0,0C512,603.5,512.9,602.6,512.9,601.4z    M519.2,601.4L519.2,601.4c0-1.2-0.9-2.1-2.1-2.1l0,0c-1.2,0-2.1,0.9-2.1,2.1l0,0c0,1.2,0.9,2.1,2.1,2.1l0,0   C518.3,603.5,519.2,602.6,519.2,601.4z M525.5,601.4L525.5,601.4c0-1.2-0.9-2.1-2.1-2.1l0,0c-1.2,0-2.1,0.9-2.1,2.1l0,0   c0,1.2,0.9,2.1,2.1,2.1l0,0C524.5,603.5,525.5,602.6,525.5,601.4z M531.8,601.4L531.8,601.4c0-1.2-0.9-2.1-2.1-2.1l0,0   c-1.2,0-2.1,0.9-2.1,2.1l0,0c0,1.2,0.9,2.1,2.1,2.1l0,0C530.8,603.5,531.8,602.6,531.8,601.4z" data-v-38a8b13a></path></g><g data-v-38a8b13a><path class="st7" d="M405.2,703c0,0-2.1,11.6-2.6,13.6c-0.4,1.6-1.6,2.8-2.8,4c-0.4,0.4-0.7,1.2-0.9,1.8c-0.2,0.5-0.1,1.1,0.2,1.6   c5.3,8.5,16.4,10.1,16.5,9.4c0.2-1.3-1.9-3.5-4.3-4.4c-2.4-0.8-4.2-3-4.8-5.5l0,0c-0.5-2-0.5-4.1,0.1-6.1l2.6-8.9L405.2,703z" data-v-38a8b13a></path><path class="st7" d="M398.7,704.3l2.6,11.7c0.8,3.6,0.3,7.3-1.4,10.6c0,0,0,0,0,0c-1,1.8-0.1,4.1,1.8,4.8c6.3,2.2,18.4,6.5,18.9,6   c2.8-2.3-4.5-6.2-9.9-10.2c-3.6-2.7-5-15.5-5.3-25.2l-5.8,1.5C399.2,703.5,398.8,703.8,398.7,704.3z" data-v-38a8b13a></path><path class="st8" d="M409.5,730.5c2.6,0.9,5.4,1.1,8,1.5c0.3,0,0.6,0.2,0.8,0.3c2.5,1.9,3.8,3.9,2.3,5.1   c-0.6,0.5-14.9-4.6-20.4-6.5c-1.2-0.4-1.7-1.8-1.1-2.9l1.1-2C403.1,727.8,406.2,729.4,409.5,730.5z" data-v-38a8b13a></path><path class="st8" d="M401.4,584.5c-6.6,2.3-10.7,11.3-7.7,19.7c1.7,4.9,10,21.8,18.1,34.9c3.1,5,3.5,11.3,0.8,16.5   c-0.4,0.8-0.8,1.7-1.1,2.6c-1.3,4.4-4.7,29.2-6.4,45.7c0.8,1.9,2.5,4.3,4.2,4.8c5.8-14.9,14.6-41.7,16-46.4   c0.8-2.6,1.6-5.5,2.1-8.3c4-8.4-5.4-48.7-8.2-56.6C416.2,589.1,407.9,582.2,401.4,584.5z" data-v-38a8b13a></path><ellipse class="st8" cx="405.5" cy="524.1" rx="10.6" ry="13.7" data-v-38a8b13a></ellipse><path class="st8" d="M403,525.5c-0.2-7.6-6.3-14-13.9-14.4c-6.7-0.4-12.5,3.7-14.7,9.6c-0.8,2.1-2.8,3.4-5,3.4   c-0.9,0-1.8,0.1-2.8,0.3c-5.5,1.1-9.9,5.8-10.4,11.5c-0.5,5.1,1.9,9.6,5.7,12.2c1.6,1.1,2.6,2.9,2.8,4.9c1.3,9,9.5,15.7,18.9,14.6   c8-0.9,14.5-7.5,15.2-15.6c0.4-4.9-1.3-9.5-4.3-12.9C399.6,536.8,403.1,531.5,403,525.5z" data-v-38a8b13a></path><path class="st8" d="M405.5,505.9c0,0,6,3.8,5.2,8.8c0,0,3.2-2.3,3.9-10C415.2,499.3,405.5,505.9,405.5,505.9z" data-v-38a8b13a></path><path class="st7" d="M415.2,532.6c3.2,1.6,6.4,2.9,9.7,3.7c3.3,0.8,6.7,0.8,10.2,0.3c3.6-0.5,7.3-1.5,11.3-2.2   c4-0.7,8.2-0.9,12.1-0.3c0.7,0.1,1.2,0.8,1.1,1.5c-0.1,0.6-0.6,1.1-1.2,1.1l0,0c-3.8,0.2-7.3,0.9-10.9,2.2c-3.5,1.2-7.1,2.8-11.1,4   c-4,1.2-8.5,1.7-12.8,1.2c-4.3-0.5-8.4-1.7-12.3-3.3c-2.3-0.9-3.5-3.6-2.6-5.9c0.9-2.3,3.6-3.5,5.9-2.6c0.1,0,0.2,0.1,0.3,0.1   L415.2,532.6z" data-v-38a8b13a></path><path class="st3" d="M412.2,563c2.4-7.2,7.2-22.5,6.8-27.4c-0.3-3.2-2.9-5.6-6.1-5.6H392c-3.4,0-6.3,2.7-6.4,6.2   c-0.2,6,2.6,19.7,4.2,26.9H412.2z" data-v-38a8b13a></path><path class="st8" d="M405.3,704.4c0.3-0.2,0.5-0.6,0.5-1c-0.4-15.3-1.4-34.8-1.7-38.5c0-0.4-0.1-0.8-0.2-1.3   c3.3-18.1,3.8-56.9,4.1-63.7c0.4-8.9-5-19-11.9-19.4c-7-0.3-14.5,6.9-16.7,15.1c-1.5,5.4,4.2,34.2,10.4,55.1   c1.3,4.4,1.5,9,0.8,13.5c-0.5,3.1-0.6,6.4-0.4,8.8c0.3,3.7,4.4,18.6,8.3,31.5c0.1,0.4,0.4,0.7,0.8,0.7   C401.4,705.7,403.4,705.6,405.3,704.4z" data-v-38a8b13a></path><path class="st3" d="M387.5,572.1c1.1-3,1.4-6.3,0.9-9.4c-1-7.4-2.9-21.2-2.7-27.1c0.1-3.2,2.7-5.6,5.8-5.6h3.1   c1.2,2.7,3.7,4.8,7.5,4.8c3.9,0,6.3-2.1,7.5-4.8h2.9c-3.1,6.7-2,15.6,3.4,20.8c-1,3.6-1.9,7.1-2.5,10c-0.9,3.9-0.5,8,1.1,11.7   c2.7,6.4,4.8,16.6,4.1,20.7c-21.9,6.2-37-4.8-37-4.8L387.5,572.1z" data-v-38a8b13a></path><g data-v-38a8b13a><polygon class="st7" points="405.5,531.4 396.1,530.4 399.1,520.1 405.2,520.8   " data-v-38a8b13a></polygon></g><path class="st9" d="M405.2,520.8l-6.1-0.8l-0.9,3.2c1.4,1.5,3.1,4.9,5.3,4.9c0.7,0,1.3-0.2,1.9-0.6L405.2,520.8z" data-v-38a8b13a></path><path class="st7" d="M405.4,525.8c-2.1,0-4.3-1-7.4-3.7c-1.8-1.5-3.1-4.2-3.1-6.1v-10.1h15.5c0,0,1.2,5.4,0,10.7   C409.6,520.6,407,525.8,405.4,525.8z" data-v-38a8b13a></path><path class="st7" d="M397.5,514.1c0,2-0.9,3.6-2.1,3.6c-1.2,0-2.4-2.6-2.4-4.5c0-2,1.3-2.6,2.4-2.6   C396.6,510.5,397.5,512.1,397.5,514.1z" data-v-38a8b13a></path><path class="st8" d="M393,507.1c0-3.1,2.6-5.7,5.7-5.7l5.2,0c1.5,0,3-0.4,4.2-1.1c1.8-1,4.2-0.7,5.4,1c1.4,1.8,2,4.3-1.5,6.6   c-1.7,1.1-4.2-0.1-5.9,0.4c-0.1,0-0.2,0-0.3,0h-4.6c-1.6,0-2.8,1.3-2.9,2.9c0,1-0.9,1.8-1.9,1.8h-0.2l-0.7-2.4l-2.6,3.5V507.1z" data-v-38a8b13a></path><path class="st7" d="M464,533c0,0-2.5,4.9-4.2,4.6c-1.7-0.3-2.9-0.7-2.6-3.3c0.3-2.5,1.9-5.9,3.2-7.7s4.9-3.9,5.5-3.9   c1.9,0.1-0.9,3.1-2.2,4.7c-1.3,1.5-2.6,3.4-1.7,3.8c0.9,0.4,3.2-2.7,4.4-2.6C467.6,528.7,464,533,464,533z" data-v-38a8b13a></path><path class="st8" d="M409.3,505.7c-0.5,2.3,0.2,3.6-7.3,7.2c-7.6,3.6-9.9,2.1-12.3,5.9c0,0,1-6.4,5.2-8.6   c4.2-2.2,11.4-3.6,13.7-8.7C408.6,501.5,409.6,504.2,409.3,505.7z" data-v-38a8b13a></path><path class="st7" d="M392,539.4c-0.4,0.3-0.7,0.5-1,0.8c-0.3,0.2-0.6,0.4-0.9,0.6c-0.6,0.4-1.2,0.8-1.8,1.1   c-1.2,0.7-2.5,1.3-3.8,1.9c-2.6,1.1-5.4,1.8-8.2,2.3c-5.7,0.8-11.5,0-16.7-2c-2.6-1-5-2.3-7.3-3.8c-2.3-1.5-4.4-3.2-6.4-5   c-3.9-3.6-7.3-7.8-10.2-12.1c-0.3-0.5-0.2-1.1,0.3-1.4c0.4-0.3,1-0.2,1.3,0.2l0,0c3.5,3.8,7.1,7.3,11.1,10.3   c4,2.9,8.3,5.4,12.9,6.7c2.3,0.6,4.6,1.1,6.9,1.2c2.3,0.1,4.6-0.1,6.9-0.5c2.3-0.4,4.5-1.2,6.6-2.1c1-0.5,2.1-1,3.1-1.6   c0.5-0.3,1-0.6,1.4-0.9c0.2-0.2,0.5-0.3,0.7-0.5l0.6-0.4l0.2-0.2c1.5-1.2,3.7-0.9,4.9,0.6C393.7,536.1,393.5,538.2,392,539.4z" data-v-38a8b13a></path><path class="st8" d="M407.8,506.2c0,0,0.3,7.8,7.1,11.5c0,0-3-5.9-2.8-9.7C412.3,504.1,407.4,503.5,407.8,506.2z" data-v-38a8b13a></path><path class="st8" d="M397.2,727.2c-0.5-0.4-0.7-1.2-0.4-1.8c0.3-0.5,1-1.8,1.5-2.8c0.2-0.4,0.8-0.5,1.1-0.1   c3.4,4.5,8.1,7.5,13.4,7.1c1.9,0.8,3.5,3.1,3.3,4.2c0,0.2-2.3,0.8-5-0.1C399.3,729.8,397.2,727.2,397.2,727.2z" data-v-38a8b13a></path><path class="st7" d="M337.7,518.6c0,0,3.3,4.4,2.3,5.9c-1,1.5-2,2.3-4.1,0.9c-2.2-1.4-4.5-4.3-5.6-6.4s-1.3-6.2-1.1-6.7   c1-1.7,2.5,2.2,3.3,4.1c0.8,1.9,1.9,3.9,2.7,3.2c0.8-0.6-1.1-4.1-0.4-5.1C335.5,513.4,337.7,518.6,337.7,518.6z" data-v-38a8b13a></path></g><path class="st10" d="M779.5,762h-494c-8.6,0-15.5-6.9-15.5-15.5l0,0c0-8.6,6.9-15.5,15.5-15.5h494c8.6,0,15.5,6.9,15.5,15.5l0,0  C795,755.1,788.1,762,779.5,762z" data-v-38a8b13a></path><path class="st3" d="M392.8,465.9l-6.5-7.1l-79.6,72.8c-5.5-3.5-12.5-4.4-19.1-1.9c-11,4.2-16.5,16.5-12.2,27.5s16.5,16.5,27.5,12.2  c11-4.2,16.5-16.5,12.2-27.5c-0.3-0.8-0.7-1.6-1.1-2.4l60.3-56.3l7.2,7.1l7.2-7.3l-5.7-5.7l2.2-2.6l5.9,5.3l5-5.7l-6.2-5.7  L392.8,465.9z M300.2,562.4c-7.1,2.7-15.2-0.8-17.9-8c-2.7-7.1,0.8-15.2,8-17.9c7.1-2.7,15.2,0.8,17.9,8  C310.9,551.7,307.3,559.7,300.2,562.4z" data-v-38a8b13a></path>',10),V=[y],k={class:"col-12 xl:col-6",style:{"border-radius":"56px",padding:"0.3rem",background:"linear-gradient("}},L={class:"h-full w-full m-0 py-7 px-4",style:{"border-radius":"53px",background:"linear-gradient("}},E={class:"w-full md:w-10 mx-auto"},S=e(()=>a("label",{for:"name",class:"block text-900 text-xl font-medium mb-2"},"Name",-1)),I={class:"p-error"},P=e(()=>a("label",{for:"email1",class:"block text-900 text-xl font-medium mb-2"},"Email",-1)),B={class:"p-error"},H=e(()=>a("label",{for:"password1",class:"block text-900 font-medium text-xl mb-2"},"Password",-1)),N={class:"p-error"},D=e(()=>a("label",{for:"password2",class:"block text-900 font-medium text-xl mb-2"},"Password Confirmation",-1));function U(s,c,G,R,t,b){const h=p("InputText"),r=p("Password"),v=p("Button");return i(),n("div",_,[a("div",f,[a("div",w,[(i(),n("svg",x,V))]),a("div",k,[a("div",L,[a("div",E,[S,d(h,{id:"name",modelValue:t.info.name,"onUpdate:modelValue":c[0]||(c[0]=l=>t.info.name=l),type:"text",class:"w-full mb-3",placeholder:"Name",style:{padding:"1rem"}},null,8,["modelValue"]),a("p",I,o(t.nameError),1),P,d(h,{id:"email1",modelValue:t.info.email,"onUpdate:modelValue":c[1]||(c[1]=l=>t.info.email=l),type:"text",class:"w-full mb-3",placeholder:"Email",style:{padding:"1rem"}},null,8,["modelValue"]),a("p",B,o(t.emailError),1),H,d(r,{id:"password1",modelValue:t.info.password,"onUpdate:modelValue":c[2]||(c[2]=l=>t.info.password=l),placeholder:"Password",toggleMask:!0,class:"w-full mb-3",inputClass:"w-full",inputStyle:"padding:1rem"},null,8,["modelValue"]),a("p",N,o(t.passwordError),1),D,d(r,{id:"password2",modelValue:t.info.password_confirmation,"onUpdate:modelValue":c[3]||(c[3]=l=>t.info.password_confirmation=l),placeholder:"Password Confirmation",toggleMask:!0,class:"w-full mb-3",inputClass:"w-full",inputStyle:"padding:1rem"},null,8,["modelValue"]),d(v,{label:"Sign In",class:"w-full p-3 text-xl",onClick:b.login},null,8,["onClick"])])])])])])}const j=m(g,[["render",U],["__scopeId","data-v-38a8b13a"]]);export{j as default};
