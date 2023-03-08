import{_ as k}from"./index.e55d5868.js";import{a5 as r,o as u,c as v,Y as n,R as s,a as b,W as p,ak as N,S as D,F as T,a8 as U,Q as $,U as C,X as j}from"./vendor-vue.6a3d94bb.js";import"./element-icon.ce1f4739.js";import"./vendor-lib.55369672.js";import"./element-plus.ff3f2c9d.js";function J(o){var e=/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;return e.test(o)}function w(o){try{return JSON.parse(o),!0}catch{return!1}}function W(o){return Object.prototype.toString.call(o)=="[object Object]"}const I=(o,e,t)=>{if(!e)return t();if(!w(e))return t(new Error("\u5FC5\u987B\u662Fjson"));let i=JSON.parse(e);Array.isArray(i)?i.some(l=>!J(l))?t(new Error("\u6570\u7EC4\u9879\u53EA\u80FD\u662F\u90AE\u7BB1\u5730\u5740")):t():t(new Error("\u5FC5\u987B\u662Farray\u6570\u7EC4"))},A={email_list:[{validator:I,trigger:"blur"}]},x={Unknown:0,Email:1,Webkook:2,WorkWeixin:3},F={name:"",props:{row:{type:Object,default:null}},components:{},data(){return{loading:!1,rules:A,form:{email_list:""},emailListExample:JSON.stringify(["123@qq.com","doamin@163.com"],null,4)}},computed:{},methods:{async getData(){let o=this.$loading(),e={type_id:x.Email};const t=await this.$http.getNotifyOfUser(e);t.data&&t.data.value&&t.data.value.email_list&&(this.form.email_list=JSON.stringify(t.data.value.email_list,null,4)),this.$nextTick(()=>{o.close()})},handleCancel(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate(o=>{if(o)this.confirmSubmit();else return!1})},async confirmSubmit(){let o=this.$loading({fullscreen:!0}),e=null;this.form.email_list&&(e=JSON.parse(this.form.email_list));let t={type_id:x.Email,value:{email_list:e}},i=await this.$http.updateNotifyOfUser(t);i.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(i.msg),this.$nextTick(()=>{o.close()})},async sendDomainInfoListEmail(){let o=this.$loading({fullscreen:!0});try{(await this.$http.sendDomainInfoListEmail()).code==0&&(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success"))}catch{}finally{this.$nextTick(()=>{o.close()})}}},created(){this.getData()}},L={class:"text-center"};function q(o,e,t,i,l,a){const f=r("el-input"),_=r("el-form-item"),d=r("el-form"),c=r("el-button"),h=r("el-tooltip");return u(),v("div",null,[n(d,{ref:"form",model:l.form,rules:l.rules,"label-width":"80px"},{default:s(()=>[n(_,{label:"\u90AE\u4EF6\u5217\u8868",prop:"email_list"},{default:s(()=>[n(f,{type:"textarea",rows:5,placeholder:`\u793A\u4F8B:
${l.emailListExample}`,modelValue:l.form.email_list,"onUpdate:modelValue":e[0]||(e[0]=y=>l.form.email_list=y)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["model","rules"]),b("div",L,[n(c,{onClick:a.handleCancel},{default:s(()=>[p("\u91CD \u7F6E")]),_:1},8,["onClick"]),n(c,{type:"primary",onClick:a.handleSubmit},{default:s(()=>[p("\u4FDD \u5B58")]),_:1},8,["onClick"]),n(h,{content:"\u8BF7\u4FDD\u5B58\u540E\u518D\u6D4B\u8BD5",placement:"top"},{default:s(()=>[n(c,{class:"margin-left--auto",onClick:a.sendDomainInfoListEmail},{default:s(()=>[p("\u6D4B \u8BD5")]),_:1},8,["onClick"])]),_:1})])])}const O=k(F,[["render",q]]),B=(o,e,t)=>{if(!e)return t();if(!w(e))return t(new Error("\u5FC5\u987B\u662Fjson"));let i=JSON.parse(e);W(i)?t():t(new Error("\u5FC5\u987B\u662Fobject\u5BF9\u8C61"))},R={headers:[{validator:B,trigger:"blur"}]},P={name:"",props:{row:{type:Object,default:null}},components:{},data(){return{loading:!1,rules:R,form:{method:"GET",url:"",headers:JSON.stringify({"Content-Type":"application/json"},null,4),body:""},methodOptions:[{label:"GET",value:"GET"},{label:"POST",value:"POST"}],headerExample:JSON.stringify({"User-Agent":"Mozilla/5.0","Content-Type":"application/json"},null,4)}},computed:{},methods:{async getData(){this.loading=!0;let o={type_id:x.Webkook},t=(await this.$http.getNotifyOfUser(o)).data;if(t&&t.value){let i="";t.value.headers&&(i=JSON.stringify(t.value.headers,null,4)),this.form={method:t.value.method,url:t.value.url,headers:i,body:t.value.body}}this.loading=!1},handleCancel(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate(o=>{if(o)this.confirmSubmit();else return!1})},async confirmSubmit(){let o=this.$loading({fullscreen:!0}),e=null;this.form.headers&&(e=JSON.parse(this.form.headers));let t={type_id:x.Webkook,value:{method:this.form.method,url:this.form.url,headers:e,body:this.form.body}},i=await this.$http.updateNotifyOfUser(t);i.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(i.msg),this.$nextTick(()=>{o.close()})},async handleTest(){let o=this.$loading({fullscreen:!0});try{const e=await this.$http.testWebhookNotifyOfUser();e.code==0&&this.$msg.success(e.data)}catch{}finally{this.$nextTick(()=>{o.close()})}}},created(){this.getData()}},z={class:"text-center"};function M(o,e,t,i,l,a){const f=r("el-option"),_=r("el-select"),d=r("el-form-item"),c=r("el-input"),h=r("el-form"),y=r("el-button"),S=r("el-tooltip"),g=N("loading");return D((u(),v("div",null,[n(h,{ref:"form",model:l.form,rules:l.rules,"label-width":"80px"},{default:s(()=>[n(d,{label:"\u8BF7\u6C42\u65B9\u6CD5",prop:"method"},{default:s(()=>[n(_,{modelValue:l.form.method,"onUpdate:modelValue":e[0]||(e[0]=m=>l.form.method=m),placeholder:"\u8BF7\u6C42\u65B9\u6CD5",style:{width:"100px"}},{default:s(()=>[(u(!0),v(T,null,U(l.methodOptions,m=>(u(),$(f,{key:m.value,label:m.label,value:m.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),n(d,{label:"\u8BF7\u6C42\u5730\u5740",prop:"url"},{default:s(()=>[n(c,{type:"text",modelValue:l.form.url,"onUpdate:modelValue":e[1]||(e[1]=m=>l.form.url=m),placeholder:"\u8BF7\u6C42\u5730\u5740"},null,8,["modelValue"])]),_:1}),n(d,{label:"\u8BF7\u6C42\u5934",prop:"headers"},{default:s(()=>[n(c,{type:"textarea",rows:5,modelValue:l.form.headers,"onUpdate:modelValue":e[2]||(e[2]=m=>l.form.headers=m),placeholder:`\u793A\u4F8B: 
${l.headerExample}`},null,8,["modelValue","placeholder"])]),_:1}),n(d,{label:"\u8BF7\u6C42\u4F53",prop:"body"},{default:s(()=>[n(c,{type:"textarea",rows:5,modelValue:l.form.body,"onUpdate:modelValue":e[3]||(e[3]=m=>l.form.body=m),placeholder:"\u8BF7\u6C42\u4F53"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),b("div",z,[n(y,{onClick:a.handleCancel},{default:s(()=>[p("\u91CD \u7F6E")]),_:1},8,["onClick"]),n(y,{type:"primary",onClick:a.handleSubmit},{default:s(()=>[p("\u4FDD \u5B58")]),_:1},8,["onClick"]),n(S,{content:"\u8BF7\u4FDD\u5B58\u540E\u518D\u6D4B\u8BD5",placement:"top"},{default:s(()=>[n(y,{onClick:a.handleTest},{default:s(()=>[p("\u6D4B \u8BD5")]),_:1},8,["onClick"])]),_:1})])])),[[g,l.loading]])}const V=k(P,[["render",M]]),G=(o,e,t)=>{if(!e)return t();if(!w(e))return t(new Error("\u5FC5\u987B\u662Fjson"));let i=JSON.parse(e);W(i)?t():t(new Error("\u5FC5\u987B\u662Fobject\u5BF9\u8C61"))},H={body:[{validator:G,trigger:"blur"}]},Z={name:"",props:{row:{type:Object,default:null}},components:{},data(){return{loading:!1,rules:H,form:{corpid:"",corpsecret:"",body:""},defaultBody:JSON.stringify({touser:"UserID1|UserID2|UserID3",toparty:"PartyID1|PartyID2",totag:"TagID1 | TagID2",msgtype:"text",agentid:1,text:{content:`\u4F60\u7684\u57DF\u540D\u8BC1\u4E66\u5373\u5C06\u5230\u671F
\u70B9\u51FB\u67E5\u770B<a href="${window.location.href}">Domain Admin</a>`},safe:0,enable_id_trans:0,enable_duplicate_check:0,duplicate_check_interval:1800},null,4)}},computed:{},methods:{async getData(){this.loading=!0;let o={type_id:x.WorkWeixin},t=(await this.$http.getNotifyOfUser(o)).data;t&&t.value?this.form={corpid:t.value.corpid,corpsecret:t.value.corpsecret,body:t.value.body}:this.form.body=this.defaultBody,this.loading=!1},handleCancel(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate(o=>{if(o)this.confirmSubmit();else return!1})},async confirmSubmit(){let o=this.$loading({fullscreen:!0});this.form.headers&&JSON.parse(this.form.headers);let e={type_id:x.WorkWeixin,value:{corpid:this.form.corpid,corpsecret:this.form.corpsecret,body:this.form.body}},t=await this.$http.updateNotifyOfUser(e);t.code==0?(this.$msg.success("\u64CD\u4F5C\u6210\u529F"),this.$emit("on-success")):this.$msg.error(t.msg),this.$nextTick(()=>{o.close()})},async handleTest(){let o=this.$loading({fullscreen:!0});try{const e=await this.$http.testWorkWeixinNotifyOfUser();e.code==0&&this.$msg.success(e.data)}catch{}finally{this.$nextTick(()=>{o.close()})}}},created(){this.getData()}},Q={class:"flex justify-end"},X={class:"text-center"};function Y(o,e,t,i,l,a){const f=r("el-link"),_=r("el-input"),d=r("el-form-item"),c=r("el-form"),h=r("el-button"),y=r("el-tooltip"),S=N("loading");return D((u(),v("div",null,[b("div",Q,[n(f,{href:"https://developer.work.weixin.qq.com/document/path/90236",target:"_blank",type:"primary"},{default:s(()=>[p("\u4F01\u4E1A\u5FAE\u4FE1-\u53D1\u9001\u5E94\u7528\u6D88\u606F")]),_:1})]),n(c,{class:"mt-md",ref:"form",model:l.form,rules:l.rules,"label-width":"80px"},{default:s(()=>[n(d,{label:"\u4F01\u4E1AID",prop:"corpid"},{default:s(()=>[n(_,{type:"text",modelValue:l.form.corpid,"onUpdate:modelValue":e[0]||(e[0]=g=>l.form.corpid=g),placeholder:"corpid"},null,8,["modelValue"])]),_:1}),n(d,{label:"\u51ED\u8BC1\u5BC6\u94A5",prop:"corpsecret"},{default:s(()=>[n(_,{type:"text",modelValue:l.form.corpsecret,"onUpdate:modelValue":e[1]||(e[1]=g=>l.form.corpsecret=g),placeholder:"corpsecret"},null,8,["modelValue"])]),_:1}),n(d,{label:"\u8BF7\u6C42\u4F53",prop:"body"},{default:s(()=>[n(_,{type:"textarea",rows:16,modelValue:l.form.body,"onUpdate:modelValue":e[2]||(e[2]=g=>l.form.body=g),placeholder:"\u8BF7\u6C42\u4F53"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),b("div",X,[n(h,{onClick:a.handleCancel},{default:s(()=>[p("\u91CD \u7F6E")]),_:1},8,["onClick"]),n(h,{type:"primary",onClick:a.handleSubmit},{default:s(()=>[p("\u4FDD \u5B58")]),_:1},8,["onClick"]),n(y,{content:"\u8BF7\u4FDD\u5B58\u540E\u518D\u6D4B\u8BD5",placement:"top"},{default:s(()=>[n(h,{onClick:a.handleTest},{default:s(()=>[p("\u6D4B \u8BD5")]),_:1},8,["onClick"])]),_:1})])])),[[S,l.loading]])}const K=k(Z,[["render",Y]]),ee={name:"domain-edit",props:{},components:{DataForm:K},data(){return{id:null}},computed:{},methods:{handleSuccess(){}},created(){this.id=this.$route.query.id}},te={class:""};function oe(o,e,t,i,l,a){const f=r("DataForm");return u(),v("div",te,[n(f,{onOnSuccess:a.handleSuccess},null,8,["onOnSuccess"])])}const E=k(ee,[["render",oe]]);const le={name:"index",props:{},components:{NotifyEditEmail:O,NotifyEditWebhook:V,NotifyEditWorkWeixin:E},data(){return{active:"email",options:[{value:"email",label:"\u90AE\u4EF6\u901A\u77E5",icon:"Message",component:O},{value:"webhook",label:"WebHook",icon:"AlarmClock",component:V},{value:"work-weixin",label:"\u4F01\u4E1A\u5FAE\u4FE1",icon:"ChatSquare",component:E}]}},computed:{currentComponent(){return this.options.find(o=>o.value==this.active).component}},methods:{async getData(){},handleMenuSelect(o,e,t,i){this.active=o}},created(){this.getData()}},ne={class:"app-container notify-edit-container"},se={class:"notify-edit__menu"},re={class:"notify-edit__main"};function ie(o,e,t,i,l,a){const f=r("el-icon"),_=r("el-menu-item"),d=r("el-menu");return u(),v("div",ne,[b("div",se,[n(d,{"default-active":l.active,"menu-trigger":"click",onSelect:a.handleMenuSelect},{default:s(()=>[(u(!0),v(T,null,U(l.options,c=>(u(),$(_,{index:c.value},{default:s(()=>[n(f,null,{default:s(()=>[(u(),$(C(c.icon)))]),_:2},1024),b("span",null,j(c.label),1)]),_:2},1032,["index"]))),256))]),_:1},8,["default-active","onSelect"])]),b("div",re,[(u(),$(C(a.currentComponent)))])])}const pe=k(le,[["render",ie],["__scopeId","data-v-f56037ab"]]);export{pe as default};
