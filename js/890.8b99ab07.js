"use strict";(self["webpackChunkcinephile"]=self["webpackChunkcinephile"]||[]).push([[890],{8890:function(t,e,n){n.r(e),n.d(e,{default:function(){return U}});var a=n(6252);const i={class:"main"};function r(t,e,n,r,c,s){const l=(0,a.up)("SearchInput");return(0,a.wg)(),(0,a.iD)("main",i,[(0,a.Wm)(l,{placeholder:"Найти фильм, сериал..."})])}var c=n(9963);const s={class:"container"},l={class:"main-search"},u={key:0,class:"main-content-list"};function o(t,e,n,i,r,o){const m=(0,a.up)("SearchContent");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",l,[(0,a.wy)((0,a._)("input",{class:"main-search__input",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>r.value=t),autofocus:""},null,512),[[c.nr,r.value]]),o.multiData?((0,a.wg)(),(0,a.iD)("div",u,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.multiData,(t=>((0,a.wg)(),(0,a.j4)(m,{key:t.id,item:t},null,8,["item"])))),128))])):(0,a.kq)("",!0)])])}var m=n(3907),h=n(3577);const p=["src"],d={class:"main-content-item__title"};function v(t,e,n,i,r,c){const s=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(s,{class:"main-content-item",to:"#"},{default:(0,a.w5)((()=>[(0,a._)("img",{class:"main-content-item__img",src:t.imgFullUrl+n.item.poster_path,alt:"alt"},null,8,p),(0,a._)("span",d,(0,h.zw)(n.item.title||n.item.name),1)])),_:1})}var g={props:["item"],computed:{...(0,m.rn)(["imgFullUrl"])}},w=n(3744);const _=(0,w.Z)(g,[["render",v]]);var f=_,D={props:["placeholder"],components:{SearchContent:f},data(){return{value:""}},computed:{...(0,m.rn)("searching",["searchData"]),multiData(){if(""!=this.value)return this.searchData}},watch:{value(t){this.$store.dispatch("searching/getSearchData",this.value)}},unmounted(){this.$store.commit("searching/resetSearch")}};const k=(0,w.Z)(D,[["render",o]]);var S=k,y={components:{SearchInput:S}};const C=(0,w.Z)(y,[["render",r]]);var U=C}}]);
//# sourceMappingURL=890.8b99ab07.js.map