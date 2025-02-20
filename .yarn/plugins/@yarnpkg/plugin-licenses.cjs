/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-licenses",
factory: function (require) {
"use strict";var plugin=(()=>{var se=Object.create;var et=Object.defineProperty;var ne=Object.getOwnPropertyDescriptor;var re=Object.getOwnPropertyNames;var oe=Object.getPrototypeOf,ae=Object.prototype.hasOwnProperty;var x=(i=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(i,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):i)(function(i){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+i+'" is not supported')});var X=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports),it=(i,t)=>{for(var e in t)et(i,e,{get:t[e],enumerable:!0})},At=(i,t,e,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of re(t))!ae.call(i,n)&&n!==e&&et(i,n,{get:()=>t[n],enumerable:!(s=ne(t,n))||s.enumerable});return i};var le=(i,t,e)=>(e=i!=null?se(oe(i)):{},At(t||!i||!i.__esModule?et(e,"default",{value:i,enumerable:!0}):e,i)),ce=i=>At(et({},"__esModule",{value:!0}),i);var Ft=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var E=(i,t,e)=>(Ft(i,t,"read from private field"),e?e.call(i):t.get(i)),st=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)};var P=(i,t,e)=>(Ft(i,t,"access private method"),e);var It=X((Ne,Et)=>{var Q=typeof performance=="object"&&performance&&typeof performance.now=="function"?performance:Date,he=typeof AbortController=="function",nt=he?AbortController:class{constructor(){this.signal=new _t}abort(t=new Error("This operation was aborted")){this.signal.reason=this.signal.reason||t,this.signal.aborted=!0,this.signal.dispatchEvent({type:"abort",target:this.signal})}},de=typeof AbortSignal=="function",fe=typeof nt.AbortSignal=="function",_t=de?AbortSignal:fe?nt.AbortController:class{constructor(){this.reason=void 0,this.aborted=!1,this._listeners=[]}dispatchEvent(t){t.type==="abort"&&(this.aborted=!0,this.onabort(t),this._listeners.forEach(e=>e(t),this))}onabort(){}addEventListener(t,e){t==="abort"&&this._listeners.push(e)}removeEventListener(t,e){t==="abort"&&(this._listeners=this._listeners.filter(s=>s!==e))}},gt=new Set,pt=(i,t)=>{let e=`LRU_CACHE_OPTION_${i}`;rt(e)&&yt(e,`${i} option`,`options.${t}`,_)},ut=(i,t)=>{let e=`LRU_CACHE_METHOD_${i}`;if(rt(e)){let{prototype:s}=_,{get:n}=Object.getOwnPropertyDescriptor(s,i);yt(e,`${i} method`,`cache.${t}()`,n)}},pe=(i,t)=>{let e=`LRU_CACHE_PROPERTY_${i}`;if(rt(e)){let{prototype:s}=_,{get:n}=Object.getOwnPropertyDescriptor(s,i);yt(e,`${i} property`,`cache.${t}`,n)}},zt=(...i)=>{typeof process=="object"&&process&&typeof process.emitWarning=="function"?process.emitWarning(...i):console.error(...i)},rt=i=>!gt.has(i),yt=(i,t,e,s)=>{gt.add(i);let n=`The ${t} is deprecated. Please use ${e} instead.`;zt(n,"DeprecationWarning",i,s)},I=i=>i&&i===Math.floor(i)&&i>0&&isFinite(i),Ot=i=>I(i)?i<=Math.pow(2,8)?Uint8Array:i<=Math.pow(2,16)?Uint16Array:i<=Math.pow(2,32)?Uint32Array:i<=Number.MAX_SAFE_INTEGER?H:null:null,H=class extends Array{constructor(t){super(t),this.fill(0)}},mt=class{constructor(t){if(t===0)return[];let e=Ot(t);this.heap=new e(t),this.length=0}push(t){this.heap[this.length++]=t}pop(){return this.heap[--this.length]}},_=class{constructor(t={}){let{max:e=0,ttl:s,ttlResolution:n=1,ttlAutopurge:r,updateAgeOnGet:o,updateAgeOnHas:a,allowStale:u,dispose:h,disposeAfter:l,noDisposeOnSet:g,noUpdateTTL:c,maxSize:f=0,maxEntrySize:y=0,sizeCalculation:d,fetchMethod:p,fetchContext:k,noDeleteOnFetchRejection:A,noDeleteOnStaleGet:$,allowStaleOnFetchRejection:w,allowStaleOnFetchAbort:D,ignoreFetchAbort:z}=t,{length:O,maxAge:j,stale:K}=t instanceof _?{}:t;if(e!==0&&!I(e))throw new TypeError("max option must be a nonnegative integer");let dt=e?Ot(e):Array;if(!dt)throw new Error("invalid max value: "+e);if(this.max=e,this.maxSize=f,this.maxEntrySize=y||this.maxSize,this.sizeCalculation=d||O,this.sizeCalculation){if(!this.maxSize&&!this.maxEntrySize)throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");if(typeof this.sizeCalculation!="function")throw new TypeError("sizeCalculation set to non-function")}if(this.fetchMethod=p||null,this.fetchMethod&&typeof this.fetchMethod!="function")throw new TypeError("fetchMethod must be a function if specified");if(this.fetchContext=k,!this.fetchMethod&&k!==void 0)throw new TypeError("cannot set fetchContext without fetchMethod");if(this.keyMap=new Map,this.keyList=new Array(e).fill(null),this.valList=new Array(e).fill(null),this.next=new dt(e),this.prev=new dt(e),this.head=0,this.tail=0,this.free=new mt(e),this.initialFill=1,this.size=0,typeof h=="function"&&(this.dispose=h),typeof l=="function"?(this.disposeAfter=l,this.disposed=[]):(this.disposeAfter=null,this.disposed=null),this.noDisposeOnSet=!!g,this.noUpdateTTL=!!c,this.noDeleteOnFetchRejection=!!A,this.allowStaleOnFetchRejection=!!w,this.allowStaleOnFetchAbort=!!D,this.ignoreFetchAbort=!!z,this.maxEntrySize!==0){if(this.maxSize!==0&&!I(this.maxSize))throw new TypeError("maxSize must be a positive integer if specified");if(!I(this.maxEntrySize))throw new TypeError("maxEntrySize must be a positive integer if specified");this.initializeSizeTracking()}if(this.allowStale=!!u||!!K,this.noDeleteOnStaleGet=!!$,this.updateAgeOnGet=!!o,this.updateAgeOnHas=!!a,this.ttlResolution=I(n)||n===0?n:1,this.ttlAutopurge=!!r,this.ttl=s||j||0,this.ttl){if(!I(this.ttl))throw new TypeError("ttl must be a positive integer if specified");this.initializeTTLTracking()}if(this.max===0&&this.ttl===0&&this.maxSize===0)throw new TypeError("At least one of max, maxSize, or ttl is required");if(!this.ttlAutopurge&&!this.max&&!this.maxSize){let ft="LRU_CACHE_UNBOUNDED";rt(ft)&&(gt.add(ft),zt("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.","UnboundedCacheWarning",ft,_))}K&&pt("stale","allowStale"),j&&pt("maxAge","ttl"),O&&pt("length","sizeCalculation")}getRemainingTTL(t){return this.has(t,{updateAgeOnHas:!1})?1/0:0}initializeTTLTracking(){this.ttls=new H(this.max),this.starts=new H(this.max),this.setItemTTL=(s,n,r=Q.now())=>{if(this.starts[s]=n!==0?r:0,this.ttls[s]=n,n!==0&&this.ttlAutopurge){let o=setTimeout(()=>{this.isStale(s)&&this.delete(this.keyList[s])},n+1);o.unref&&o.unref()}},this.updateItemAge=s=>{this.starts[s]=this.ttls[s]!==0?Q.now():0},this.statusTTL=(s,n)=>{s&&(s.ttl=this.ttls[n],s.start=this.starts[n],s.now=t||e(),s.remainingTTL=s.now+s.ttl-s.start)};let t=0,e=()=>{let s=Q.now();if(this.ttlResolution>0){t=s;let n=setTimeout(()=>t=0,this.ttlResolution);n.unref&&n.unref()}return s};this.getRemainingTTL=s=>{let n=this.keyMap.get(s);return n===void 0?0:this.ttls[n]===0||this.starts[n]===0?1/0:this.starts[n]+this.ttls[n]-(t||e())},this.isStale=s=>this.ttls[s]!==0&&this.starts[s]!==0&&(t||e())-this.starts[s]>this.ttls[s]}updateItemAge(t){}statusTTL(t,e){}setItemTTL(t,e,s){}isStale(t){return!1}initializeSizeTracking(){this.calculatedSize=0,this.sizes=new H(this.max),this.removeItemSize=t=>{this.calculatedSize-=this.sizes[t],this.sizes[t]=0},this.requireSize=(t,e,s,n)=>{if(this.isBackgroundFetch(e))return 0;if(!I(s))if(n){if(typeof n!="function")throw new TypeError("sizeCalculation must be a function");if(s=n(e,t),!I(s))throw new TypeError("sizeCalculation return invalid (expect positive integer)")}else throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");return s},this.addItemSize=(t,e,s)=>{if(this.sizes[t]=e,this.maxSize){let n=this.maxSize-this.sizes[t];for(;this.calculatedSize>n;)this.evict(!0)}this.calculatedSize+=this.sizes[t],s&&(s.entrySize=e,s.totalCalculatedSize=this.calculatedSize)}}removeItemSize(t){}addItemSize(t,e){}requireSize(t,e,s,n){if(s||n)throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache")}*indexes({allowStale:t=this.allowStale}={}){if(this.size)for(let e=this.tail;!(!this.isValidIndex(e)||((t||!this.isStale(e))&&(yield e),e===this.head));)e=this.prev[e]}*rindexes({allowStale:t=this.allowStale}={}){if(this.size)for(let e=this.head;!(!this.isValidIndex(e)||((t||!this.isStale(e))&&(yield e),e===this.tail));)e=this.next[e]}isValidIndex(t){return t!==void 0&&this.keyMap.get(this.keyList[t])===t}*entries(){for(let t of this.indexes())this.valList[t]!==void 0&&this.keyList[t]!==void 0&&!this.isBackgroundFetch(this.valList[t])&&(yield[this.keyList[t],this.valList[t]])}*rentries(){for(let t of this.rindexes())this.valList[t]!==void 0&&this.keyList[t]!==void 0&&!this.isBackgroundFetch(this.valList[t])&&(yield[this.keyList[t],this.valList[t]])}*keys(){for(let t of this.indexes())this.keyList[t]!==void 0&&!this.isBackgroundFetch(this.valList[t])&&(yield this.keyList[t])}*rkeys(){for(let t of this.rindexes())this.keyList[t]!==void 0&&!this.isBackgroundFetch(this.valList[t])&&(yield this.keyList[t])}*values(){for(let t of this.indexes())this.valList[t]!==void 0&&!this.isBackgroundFetch(this.valList[t])&&(yield this.valList[t])}*rvalues(){for(let t of this.rindexes())this.valList[t]!==void 0&&!this.isBackgroundFetch(this.valList[t])&&(yield this.valList[t])}[Symbol.iterator](){return this.entries()}find(t,e){for(let s of this.indexes()){let n=this.valList[s],r=this.isBackgroundFetch(n)?n.__staleWhileFetching:n;if(r!==void 0&&t(r,this.keyList[s],this))return this.get(this.keyList[s],e)}}forEach(t,e=this){for(let s of this.indexes()){let n=this.valList[s],r=this.isBackgroundFetch(n)?n.__staleWhileFetching:n;r!==void 0&&t.call(e,r,this.keyList[s],this)}}rforEach(t,e=this){for(let s of this.rindexes()){let n=this.valList[s],r=this.isBackgroundFetch(n)?n.__staleWhileFetching:n;r!==void 0&&t.call(e,r,this.keyList[s],this)}}get prune(){return ut("prune","purgeStale"),this.purgeStale}purgeStale(){let t=!1;for(let e of this.rindexes({allowStale:!0}))this.isStale(e)&&(this.delete(this.keyList[e]),t=!0);return t}dump(){let t=[];for(let e of this.indexes({allowStale:!0})){let s=this.keyList[e],n=this.valList[e],r=this.isBackgroundFetch(n)?n.__staleWhileFetching:n;if(r===void 0)continue;let o={value:r};if(this.ttls){o.ttl=this.ttls[e];let a=Q.now()-this.starts[e];o.start=Math.floor(Date.now()-a)}this.sizes&&(o.size=this.sizes[e]),t.unshift([s,o])}return t}load(t){this.clear();for(let[e,s]of t){if(s.start){let n=Date.now()-s.start;s.start=Q.now()-n}this.set(e,s.value,s)}}dispose(t,e,s){}set(t,e,{ttl:s=this.ttl,start:n,noDisposeOnSet:r=this.noDisposeOnSet,size:o=0,sizeCalculation:a=this.sizeCalculation,noUpdateTTL:u=this.noUpdateTTL,status:h}={}){if(o=this.requireSize(t,e,o,a),this.maxEntrySize&&o>this.maxEntrySize)return h&&(h.set="miss",h.maxEntrySizeExceeded=!0),this.delete(t),this;let l=this.size===0?void 0:this.keyMap.get(t);if(l===void 0)l=this.newIndex(),this.keyList[l]=t,this.valList[l]=e,this.keyMap.set(t,l),this.next[this.tail]=l,this.prev[l]=this.tail,this.tail=l,this.size++,this.addItemSize(l,o,h),h&&(h.set="add"),u=!1;else{this.moveToTail(l);let g=this.valList[l];if(e!==g){if(this.isBackgroundFetch(g)?g.__abortController.abort(new Error("replaced")):r||(this.dispose(g,t,"set"),this.disposeAfter&&this.disposed.push([g,t,"set"])),this.removeItemSize(l),this.valList[l]=e,this.addItemSize(l,o,h),h){h.set="replace";let c=g&&this.isBackgroundFetch(g)?g.__staleWhileFetching:g;c!==void 0&&(h.oldValue=c)}}else h&&(h.set="update")}if(s!==0&&this.ttl===0&&!this.ttls&&this.initializeTTLTracking(),u||this.setItemTTL(l,s,n),this.statusTTL(h,l),this.disposeAfter)for(;this.disposed.length;)this.disposeAfter(...this.disposed.shift());return this}newIndex(){return this.size===0?this.tail:this.size===this.max&&this.max!==0?this.evict(!1):this.free.length!==0?this.free.pop():this.initialFill++}pop(){if(this.size){let t=this.valList[this.head];return this.evict(!0),t}}evict(t){let e=this.head,s=this.keyList[e],n=this.valList[e];return this.isBackgroundFetch(n)?n.__abortController.abort(new Error("evicted")):(this.dispose(n,s,"evict"),this.disposeAfter&&this.disposed.push([n,s,"evict"])),this.removeItemSize(e),t&&(this.keyList[e]=null,this.valList[e]=null,this.free.push(e)),this.head=this.next[e],this.keyMap.delete(s),this.size--,e}has(t,{updateAgeOnHas:e=this.updateAgeOnHas,status:s}={}){let n=this.keyMap.get(t);if(n!==void 0)if(this.isStale(n))s&&(s.has="stale",this.statusTTL(s,n));else return e&&this.updateItemAge(n),s&&(s.has="hit"),this.statusTTL(s,n),!0;else s&&(s.has="miss");return!1}peek(t,{allowStale:e=this.allowStale}={}){let s=this.keyMap.get(t);if(s!==void 0&&(e||!this.isStale(s))){let n=this.valList[s];return this.isBackgroundFetch(n)?n.__staleWhileFetching:n}}backgroundFetch(t,e,s,n){let r=e===void 0?void 0:this.valList[e];if(this.isBackgroundFetch(r))return r;let o=new nt;s.signal&&s.signal.addEventListener("abort",()=>o.abort(s.signal.reason));let a={signal:o.signal,options:s,context:n},u=(f,y=!1)=>{let{aborted:d}=o.signal,p=s.ignoreFetchAbort&&f!==void 0;return s.status&&(d&&!y?(s.status.fetchAborted=!0,s.status.fetchError=o.signal.reason,p&&(s.status.fetchAbortIgnored=!0)):s.status.fetchResolved=!0),d&&!p&&!y?l(o.signal.reason):(this.valList[e]===c&&(f===void 0?c.__staleWhileFetching?this.valList[e]=c.__staleWhileFetching:this.delete(t):(s.status&&(s.status.fetchUpdated=!0),this.set(t,f,a.options))),f)},h=f=>(s.status&&(s.status.fetchRejected=!0,s.status.fetchError=f),l(f)),l=f=>{let{aborted:y}=o.signal,d=y&&s.allowStaleOnFetchAbort,p=d||s.allowStaleOnFetchRejection,k=p||s.noDeleteOnFetchRejection;if(this.valList[e]===c&&(!k||c.__staleWhileFetching===void 0?this.delete(t):d||(this.valList[e]=c.__staleWhileFetching)),p)return s.status&&c.__staleWhileFetching!==void 0&&(s.status.returnedStale=!0),c.__staleWhileFetching;if(c.__returned===c)throw f},g=(f,y)=>{this.fetchMethod(t,r,a).then(d=>f(d),y),o.signal.addEventListener("abort",()=>{(!s.ignoreFetchAbort||s.allowStaleOnFetchAbort)&&(f(),s.allowStaleOnFetchAbort&&(f=d=>u(d,!0)))})};s.status&&(s.status.fetchDispatched=!0);let c=new Promise(g).then(u,h);return c.__abortController=o,c.__staleWhileFetching=r,c.__returned=null,e===void 0?(this.set(t,c,{...a.options,status:void 0}),e=this.keyMap.get(t)):this.valList[e]=c,c}isBackgroundFetch(t){return t&&typeof t=="object"&&typeof t.then=="function"&&Object.prototype.hasOwnProperty.call(t,"__staleWhileFetching")&&Object.prototype.hasOwnProperty.call(t,"__returned")&&(t.__returned===t||t.__returned===null)}async fetch(t,{allowStale:e=this.allowStale,updateAgeOnGet:s=this.updateAgeOnGet,noDeleteOnStaleGet:n=this.noDeleteOnStaleGet,ttl:r=this.ttl,noDisposeOnSet:o=this.noDisposeOnSet,size:a=0,sizeCalculation:u=this.sizeCalculation,noUpdateTTL:h=this.noUpdateTTL,noDeleteOnFetchRejection:l=this.noDeleteOnFetchRejection,allowStaleOnFetchRejection:g=this.allowStaleOnFetchRejection,ignoreFetchAbort:c=this.ignoreFetchAbort,allowStaleOnFetchAbort:f=this.allowStaleOnFetchAbort,fetchContext:y=this.fetchContext,forceRefresh:d=!1,status:p,signal:k}={}){if(!this.fetchMethod)return p&&(p.fetch="get"),this.get(t,{allowStale:e,updateAgeOnGet:s,noDeleteOnStaleGet:n,status:p});let A={allowStale:e,updateAgeOnGet:s,noDeleteOnStaleGet:n,ttl:r,noDisposeOnSet:o,size:a,sizeCalculation:u,noUpdateTTL:h,noDeleteOnFetchRejection:l,allowStaleOnFetchRejection:g,allowStaleOnFetchAbort:f,ignoreFetchAbort:c,status:p,signal:k},$=this.keyMap.get(t);if($===void 0){p&&(p.fetch="miss");let w=this.backgroundFetch(t,$,A,y);return w.__returned=w}else{let w=this.valList[$];if(this.isBackgroundFetch(w)){let K=e&&w.__staleWhileFetching!==void 0;return p&&(p.fetch="inflight",K&&(p.returnedStale=!0)),K?w.__staleWhileFetching:w.__returned=w}let D=this.isStale($);if(!d&&!D)return p&&(p.fetch="hit"),this.moveToTail($),s&&this.updateItemAge($),this.statusTTL(p,$),w;let z=this.backgroundFetch(t,$,A,y),O=z.__staleWhileFetching!==void 0,j=O&&e;return p&&(p.fetch=O&&D?"stale":"refresh",j&&D&&(p.returnedStale=!0)),j?z.__staleWhileFetching:z.__returned=z}}get(t,{allowStale:e=this.allowStale,updateAgeOnGet:s=this.updateAgeOnGet,noDeleteOnStaleGet:n=this.noDeleteOnStaleGet,status:r}={}){let o=this.keyMap.get(t);if(o!==void 0){let a=this.valList[o],u=this.isBackgroundFetch(a);return this.statusTTL(r,o),this.isStale(o)?(r&&(r.get="stale"),u?(r&&(r.returnedStale=e&&a.__staleWhileFetching!==void 0),e?a.__staleWhileFetching:void 0):(n||this.delete(t),r&&(r.returnedStale=e),e?a:void 0)):(r&&(r.get="hit"),u?a.__staleWhileFetching:(this.moveToTail(o),s&&this.updateItemAge(o),a))}else r&&(r.get="miss")}connect(t,e){this.prev[e]=t,this.next[t]=e}moveToTail(t){t!==this.tail&&(t===this.head?this.head=this.next[t]:this.connect(this.prev[t],this.next[t]),this.connect(this.tail,t),this.tail=t)}get del(){return ut("del","delete"),this.delete}delete(t){let e=!1;if(this.size!==0){let s=this.keyMap.get(t);if(s!==void 0)if(e=!0,this.size===1)this.clear();else{this.removeItemSize(s);let n=this.valList[s];this.isBackgroundFetch(n)?n.__abortController.abort(new Error("deleted")):(this.dispose(n,t,"delete"),this.disposeAfter&&this.disposed.push([n,t,"delete"])),this.keyMap.delete(t),this.keyList[s]=null,this.valList[s]=null,s===this.tail?this.tail=this.prev[s]:s===this.head?this.head=this.next[s]:(this.next[this.prev[s]]=this.next[s],this.prev[this.next[s]]=this.prev[s]),this.size--,this.free.push(s)}}if(this.disposed)for(;this.disposed.length;)this.disposeAfter(...this.disposed.shift());return e}clear(){for(let t of this.rindexes({allowStale:!0})){let e=this.valList[t];if(this.isBackgroundFetch(e))e.__abortController.abort(new Error("deleted"));else{let s=this.keyList[t];this.dispose(e,s,"delete"),this.disposeAfter&&this.disposed.push([e,s,"delete"])}}if(this.keyMap.clear(),this.valList.fill(null),this.keyList.fill(null),this.ttls&&(this.ttls.fill(0),this.starts.fill(0)),this.sizes&&this.sizes.fill(0),this.head=0,this.tail=0,this.initialFill=1,this.free.length=0,this.calculatedSize=0,this.size=0,this.disposed)for(;this.disposed.length;)this.disposeAfter(...this.disposed.shift())}get reset(){return ut("reset","clear"),this.clear}get length(){return pe("length","size"),this.size}static get AbortController(){return nt}static get AbortSignal(){return _t}};Et.exports=_});var Ut=X((He,Mt)=>{"use strict";var m=(...i)=>i.every(t=>t)?i.join(""):"",S=i=>i?encodeURIComponent(i):"",Ct=i=>i.toLowerCase().replace(/^\W+|\/|\W+$/g,"").replace(/\W+/g,"-"),ue={sshtemplate:({domain:i,user:t,project:e,committish:s})=>`git@${i}:${t}/${e}.git${m("#",s)}`,sshurltemplate:({domain:i,user:t,project:e,committish:s})=>`git+ssh://git@${i}/${t}/${e}.git${m("#",s)}`,edittemplate:({domain:i,user:t,project:e,committish:s,editpath:n,path:r})=>`https://${i}/${t}/${e}${m("/",n,"/",S(s||"HEAD"),"/",r)}`,browsetemplate:({domain:i,user:t,project:e,committish:s,treepath:n})=>`https://${i}/${t}/${e}${m("/",n,"/",S(s))}`,browsetreetemplate:({domain:i,user:t,project:e,committish:s,treepath:n,path:r,fragment:o,hashformat:a})=>`https://${i}/${t}/${e}/${n}/${S(s||"HEAD")}/${r}${m("#",a(o||""))}`,browseblobtemplate:({domain:i,user:t,project:e,committish:s,blobpath:n,path:r,fragment:o,hashformat:a})=>`https://${i}/${t}/${e}/${n}/${S(s||"HEAD")}/${r}${m("#",a(o||""))}`,docstemplate:({domain:i,user:t,project:e,treepath:s,committish:n})=>`https://${i}/${t}/${e}${m("/",s,"/",S(n))}#readme`,httpstemplate:({auth:i,domain:t,user:e,project:s,committish:n})=>`git+https://${m(i,"@")}${t}/${e}/${s}.git${m("#",n)}`,filetemplate:({domain:i,user:t,project:e,committish:s,path:n})=>`https://${i}/${t}/${e}/raw/${S(s||"HEAD")}/${n}`,shortcuttemplate:({type:i,user:t,project:e,committish:s})=>`${i}:${t}/${e}${m("#",s)}`,pathtemplate:({user:i,project:t,committish:e})=>`${i}/${t}${m("#",e)}`,bugstemplate:({domain:i,user:t,project:e})=>`https://${i}/${t}/${e}/issues`,hashformat:Ct},C={};C.github={protocols:["git:","http:","git+ssh:","git+https:","ssh:","https:"],domain:"github.com",treepath:"tree",blobpath:"blob",editpath:"edit",filetemplate:({auth:i,user:t,project:e,committish:s,path:n})=>`https://${m(i,"@")}raw.githubusercontent.com/${t}/${e}/${S(s||"HEAD")}/${n}`,gittemplate:({auth:i,domain:t,user:e,project:s,committish:n})=>`git://${m(i,"@")}${t}/${e}/${s}.git${m("#",n)}`,tarballtemplate:({domain:i,user:t,project:e,committish:s})=>`https://codeload.${i}/${t}/${e}/tar.gz/${S(s||"HEAD")}`,extract:i=>{let[,t,e,s,n]=i.pathname.split("/",5);if(!(s&&s!=="tree")&&(s||(n=i.hash.slice(1)),e&&e.endsWith(".git")&&(e=e.slice(0,-4)),!(!t||!e)))return{user:t,project:e,committish:n}}};C.bitbucket={protocols:["git+ssh:","git+https:","ssh:","https:"],domain:"bitbucket.org",treepath:"src",blobpath:"src",editpath:"?mode=edit",edittemplate:({domain:i,user:t,project:e,committish:s,treepath:n,path:r,editpath:o})=>`https://${i}/${t}/${e}${m("/",n,"/",S(s||"HEAD"),"/",r,o)}`,tarballtemplate:({domain:i,user:t,project:e,committish:s})=>`https://${i}/${t}/${e}/get/${S(s||"HEAD")}.tar.gz`,extract:i=>{let[,t,e,s]=i.pathname.split("/",4);if(!["get"].includes(s)&&(e&&e.endsWith(".git")&&(e=e.slice(0,-4)),!(!t||!e)))return{user:t,project:e,committish:i.hash.slice(1)}}};C.gitlab={protocols:["git+ssh:","git+https:","ssh:","https:"],domain:"gitlab.com",treepath:"tree",blobpath:"tree",editpath:"-/edit",httpstemplate:({auth:i,domain:t,user:e,project:s,committish:n})=>`git+https://${m(i,"@")}${t}/${e}/${s}.git${m("#",n)}`,tarballtemplate:({domain:i,user:t,project:e,committish:s})=>`https://${i}/${t}/${e}/repository/archive.tar.gz?ref=${S(s||"HEAD")}`,extract:i=>{let t=i.pathname.slice(1);if(t.includes("/-/")||t.includes("/archive.tar.gz"))return;let e=t.split("/"),s=e.pop();s.endsWith(".git")&&(s=s.slice(0,-4));let n=e.join("/");if(!(!n||!s))return{user:n,project:s,committish:i.hash.slice(1)}}};C.gist={protocols:["git:","git+ssh:","git+https:","ssh:","https:"],domain:"gist.github.com",editpath:"edit",sshtemplate:({domain:i,project:t,committish:e})=>`git@${i}:${t}.git${m("#",e)}`,sshurltemplate:({domain:i,project:t,committish:e})=>`git+ssh://git@${i}/${t}.git${m("#",e)}`,edittemplate:({domain:i,user:t,project:e,committish:s,editpath:n})=>`https://${i}/${t}/${e}${m("/",S(s))}/${n}`,browsetemplate:({domain:i,project:t,committish:e})=>`https://${i}/${t}${m("/",S(e))}`,browsetreetemplate:({domain:i,project:t,committish:e,path:s,hashformat:n})=>`https://${i}/${t}${m("/",S(e))}${m("#",n(s))}`,browseblobtemplate:({domain:i,project:t,committish:e,path:s,hashformat:n})=>`https://${i}/${t}${m("/",S(e))}${m("#",n(s))}`,docstemplate:({domain:i,project:t,committish:e})=>`https://${i}/${t}${m("/",S(e))}`,httpstemplate:({domain:i,project:t,committish:e})=>`git+https://${i}/${t}.git${m("#",e)}`,filetemplate:({user:i,project:t,committish:e,path:s})=>`https://gist.githubusercontent.com/${i}/${t}/raw${m("/",S(e))}/${s}`,shortcuttemplate:({type:i,project:t,committish:e})=>`${i}:${t}${m("#",e)}`,pathtemplate:({project:i,committish:t})=>`${i}${m("#",t)}`,bugstemplate:({domain:i,project:t})=>`https://${i}/${t}`,gittemplate:({domain:i,project:t,committish:e})=>`git://${i}/${t}.git${m("#",e)}`,tarballtemplate:({project:i,committish:t})=>`https://codeload.github.com/gist/${i}/tar.gz/${S(t||"HEAD")}`,extract:i=>{let[,t,e,s]=i.pathname.split("/",4);if(s!=="raw"){if(!e){if(!t)return;e=t,t=null}return e.endsWith(".git")&&(e=e.slice(0,-4)),{user:t,project:e,committish:i.hash.slice(1)}}},hashformat:function(i){return i&&"file-"+Ct(i)}};C.sourcehut={protocols:["git+ssh:","https:"],domain:"git.sr.ht",treepath:"tree",blobpath:"tree",filetemplate:({domain:i,user:t,project:e,committish:s,path:n})=>`https://${i}/${t}/${e}/blob/${S(s)||"HEAD"}/${n}`,httpstemplate:({domain:i,user:t,project:e,committish:s})=>`https://${i}/${t}/${e}.git${m("#",s)}`,tarballtemplate:({domain:i,user:t,project:e,committish:s})=>`https://${i}/${t}/${e}/archive/${S(s)||"HEAD"}.tar.gz`,bugstemplate:({user:i,project:t})=>`https://todo.sr.ht/${i}/${t}`,extract:i=>{let[,t,e,s]=i.pathname.split("/",4);if(!["archive"].includes(s)&&(e&&e.endsWith(".git")&&(e=e.slice(0,-4)),!(!t||!e)))return{user:t,project:e,committish:i.hash.slice(1)}}};for(let[i,t]of Object.entries(C))C[i]=Object.assign({},ue,t);Mt.exports=C});var wt=X((Be,Dt)=>{var me=x("url"),bt=(i,t,e)=>{let s=i.indexOf(e);return i.lastIndexOf(t,s>-1?s:1/0)},Wt=i=>{try{return new me.URL(i)}catch{}},ge=(i,t)=>{let e=i.indexOf(":"),s=i.slice(0,e+1);if(Object.prototype.hasOwnProperty.call(t,s))return i;let n=i.indexOf("@");return n>-1?n>e?`git+ssh://${i}`:i:i.indexOf("//")===e+1?i:`${i.slice(0,e+1)}//${i.slice(e+1)}`},ye=i=>{let t=bt(i,"@","#"),e=bt(i,":","#");return e>t&&(i=i.slice(0,e)+"/"+i.slice(e+1)),bt(i,":","#")===-1&&i.indexOf("//")===-1&&(i=`git+ssh://${i}`),i};Dt.exports=(i,t)=>{let e=t?ge(i,t):i;return Wt(e)||Wt(ye(e))}});var Rt=X((Ve,jt)=>{"use strict";var be=wt(),we=i=>{let t=i.indexOf("#"),e=i.indexOf("/"),s=i.indexOf("/",e+1),n=i.indexOf(":"),r=/\s/.exec(i),o=i.indexOf("@"),a=!r||t>-1&&r.index>t,u=o===-1||t>-1&&o>t,h=n===-1||t>-1&&n>t,l=s===-1||t>-1&&s>t,g=e>0,c=t>-1?i[t-1]!=="/":!i.endsWith("/"),f=!i.startsWith(".");return a&&g&&c&&f&&u&&h&&l};jt.exports=(i,t,{gitHosts:e,protocols:s})=>{if(!i)return;let n=we(i)?`github:${i}`:i,r=be(n,s);if(!r)return;let o=e.byShortcut[r.protocol],a=e.byDomain[r.hostname.startsWith("www.")?r.hostname.slice(4):r.hostname],u=o||a;if(!u)return;let h=e[o||a],l=null;s[r.protocol]?.auth&&(r.username||r.password)&&(l=`${r.username}${r.password?":"+r.password:""}`);let g=null,c=null,f=null,y=null;try{if(o){let d=r.pathname.startsWith("/")?r.pathname.slice(1):r.pathname,p=d.indexOf("@");p>-1&&(d=d.slice(p+1));let k=d.lastIndexOf("/");k>-1?(c=decodeURIComponent(d.slice(0,k)),c||(c=null),f=decodeURIComponent(d.slice(k+1))):f=decodeURIComponent(d),f.endsWith(".git")&&(f=f.slice(0,-4)),r.hash&&(g=decodeURIComponent(r.hash.slice(1))),y="shortcut"}else{if(!h.protocols.includes(r.protocol))return;let d=h.extract(r);if(!d)return;c=d.user&&decodeURIComponent(d.user),f=decodeURIComponent(d.project),g=decodeURIComponent(d.committish),y=s[r.protocol]?.name||r.protocol.slice(0,-1)}}catch(d){if(d instanceof URIError)return;throw d}return[u,c,l,f,g,y,t]}});var Ht=X((qe,Nt)=>{"use strict";var $e=It(),Se=Ut(),ve=Rt(),xe=wt(),$t=new $e({max:1e3}),M,Z,v,L,F=class{constructor(t,e,s,n,r,o,a={}){st(this,v);Object.assign(this,E(F,M)[t],{type:t,user:e,auth:s,project:n,committish:r,default:o,opts:a})}static addHost(t,e){E(F,M)[t]=e,E(F,M).byDomain[e.domain]=t,E(F,M).byShortcut[`${t}:`]=t,E(F,Z)[`${t}:`]={name:t}}static fromUrl(t,e){if(typeof t!="string")return;let s=t+JSON.stringify(e||{});if(!$t.has(s)){let n=ve(t,e,{gitHosts:E(F,M),protocols:E(F,Z)});$t.set(s,n?new F(...n):void 0)}return $t.get(s)}static parseUrl(t){return xe(t)}hash(){return this.committish?`#${this.committish}`:""}ssh(t){return P(this,v,L).call(this,this.sshtemplate,t)}sshurl(t){return P(this,v,L).call(this,this.sshurltemplate,t)}browse(t,...e){return typeof t!="string"?P(this,v,L).call(this,this.browsetemplate,t):typeof e[0]!="string"?P(this,v,L).call(this,this.browsetreetemplate,{...e[0],path:t}):P(this,v,L).call(this,this.browsetreetemplate,{...e[1],fragment:e[0],path:t})}browseFile(t,...e){return typeof e[0]!="string"?P(this,v,L).call(this,this.browseblobtemplate,{...e[0],path:t}):P(this,v,L).call(this,this.browseblobtemplate,{...e[1],fragment:e[0],path:t})}docs(t){return P(this,v,L).call(this,this.docstemplate,t)}bugs(t){return P(this,v,L).call(this,this.bugstemplate,t)}https(t){return P(this,v,L).call(this,this.httpstemplate,t)}git(t){return P(this,v,L).call(this,this.gittemplate,t)}shortcut(t){return P(this,v,L).call(this,this.shortcuttemplate,t)}path(t){return P(this,v,L).call(this,this.pathtemplate,t)}tarball(t){return P(this,v,L).call(this,this.tarballtemplate,{...t,noCommittish:!1})}file(t,e){return P(this,v,L).call(this,this.filetemplate,{...e,path:t})}edit(t,e){return P(this,v,L).call(this,this.edittemplate,{...e,path:t})}getDefaultRepresentation(){return this.default}toString(t){return this.default&&typeof this[this.default]=="function"?this[this.default](t):this.sshurl(t)}},B=F;M=new WeakMap,Z=new WeakMap,v=new WeakSet,L=function(t,e){if(typeof t!="function")return null;let s={...this,...this.opts,...e};s.path||(s.path=""),s.path.startsWith("/")&&(s.path=s.path.slice(1)),s.noCommittish&&(s.committish=null);let n=t(s);return s.noGitPlus&&n.startsWith("git+")?n.slice(4):n},st(B,M,{byShortcut:{},byDomain:{}}),st(B,Z,{"git+ssh:":{name:"sshurl"},"ssh:":{name:"sshurl"},"git+https:":{name:"https",auth:!0},"git:":{auth:!0},"http:":{auth:!0},"https:":{auth:!0},"git+http:":{auth:!0}});for(let[i,t]of Object.entries(Se))B.addHost(i,t);Nt.exports=B});var Ue={};it(Ue,{default:()=>Me});var ee=x("@yarnpkg/cli"),Y=x("@yarnpkg/core"),W=x("clipanion");var b=x("@yarnpkg/core"),T=x("@yarnpkg/fslib"),Jt=le(Ht());var xt={};it(xt,{getFs:()=>ke,getPackagePath:()=>Pe});var Bt=x("@yarnpkg/plugin-pnp"),ot=x("@yarnpkg/core"),Vt=x("@yarnpkg/fslib"),at=x("@yarnpkg/libzip");var V=()=>({os:[process.platform],cpu:[process.arch],libc:[]});var Pe=async(i,t)=>{if(Le(i),!ot.structUtils.isPackageCompatible(t,V()))return null;let e=ot.structUtils.convertPackageToLocator(t),s={name:ot.structUtils.stringifyIdent(e),reference:e.reference},n=St.getPackageInformation(s);if(!n)return null;let{packageLocation:r}=n;return r},St,Le=i=>{St||(St=module.require((0,Bt.getPnpPath)(i).cjs))},ke=()=>(Te(),vt),vt,Te=()=>{vt||(vt=new Vt.VirtualFS({baseFs:new at.ZipOpenFS({libzip:(0,at.getLibzipSync)(),readOnlyArchives:!0})}))};var Pt={};it(Pt,{_getYarnStateAliases:()=>Gt,getFs:()=>_e,getPackagePath:()=>Ae});var R=x("@yarnpkg/core"),qt=x("@yarnpkg/parsers"),U=x("@yarnpkg/fslib");var Ae=async(i,t)=>{if(await Fe(i),!R.structUtils.isPackageCompatible(t,V()))return null;let e=R.structUtils.convertPackageToLocator(t),s=R.structUtils.stringifyLocator(e),n=lt[s]||Yt[s];if(!n)return null;let r=n.locations[0];return r?U.ppath.join(i.cwd,r):i.cwd},lt,Yt,Fe=async i=>{if(!lt){let t=U.ppath.join(i.configuration.projectCwd,U.Filename.nodeModules,".yarn-state.yml");lt=(0,qt.parseSyml)(await U.xfs.readFilePromise(t,"utf8")),Yt=Gt(lt)}},_e=()=>U.xfs,Gt=i=>Object.entries(i).reduce((t,[e,s])=>{if(!s.aliases)return t;let n=R.structUtils.parseLocator(e);for(let r of s.aliases){let o=R.structUtils.makeLocator(n,r),a=R.structUtils.stringifyLocator(o);t[a]=s}return t},{});var Lt={};it(Lt,{getFs:()=>Oe,getPackagePath:()=>ze});var tt=x("@yarnpkg/core"),N=x("@yarnpkg/fslib");var ze=async(i,t)=>{if(!tt.structUtils.isPackageCompatible(t,V()))return null;let e=tt.structUtils.convertPackageToLocator(t),s=tt.structUtils.slugifyLocator(e),n=tt.structUtils.stringifyIdent(e),r=i.tryWorkspaceByLocator(e);return r?r.cwd:N.ppath.join(i.configuration.projectCwd,N.Filename.nodeModules,".store",s,N.Filename.nodeModules,n)},Oe=()=>N.xfs;var kt=i=>{switch(i){case"pnp":return xt;case"node-modules":return Pt;case"pnpm":return Lt;default:throw new Error("Unsupported linker")}};var gi=T.npath.basename(__dirname)==="@yarnpkg"?T.ppath.join(T.npath.toPortablePath(__dirname),"../.."):T.ppath.join(T.npath.toPortablePath(__dirname),".."),Kt=async(i,t,e,s,n)=>{let r={},o={children:r},a=await Xt(i,e,s),u=kt(i.configuration.get("nodeLinker")),h=u.getFs();for(let[l,g]of a.entries()){let c=await u.getPackagePath(i,g);if(c===null)continue;let f=JSON.parse(await h.readFilePromise(T.ppath.join(c,T.Filename.manifest),"utf8")),{license:y,url:d,vendorName:p,vendorUrl:k}=Ie(f);r[y]||(r[y]={value:b.formatUtils.tuple(b.formatUtils.Type.NO_HINT,y),children:{}});let A=b.structUtils.convertPackageToLocator(g),$=b.formatUtils.tuple(b.formatUtils.Type.DEPENDENT,{locator:A,descriptor:l}),w=n?{}:{...d?{url:{value:b.formatUtils.tuple(b.formatUtils.Type.NO_HINT,Tt("URL",d,t))}}:{},...p?{vendorName:{value:b.formatUtils.tuple(b.formatUtils.Type.NO_HINT,Tt("VendorName",p,t))}}:{},...k?{vendorUrl:{value:b.formatUtils.tuple(b.formatUtils.Type.NO_HINT,Tt("VendorUrl",k,t))}}:{}},D={value:$,children:w},z=b.structUtils.stringifyLocator(A),O=r[y];if(O){let j=O.children;j[z]=D}}return o},Xt=async(i,t,e)=>{let s=new Map,n;if(t){if(e){for(let u of i.workspaces)u.manifest.devDependencies.clear();let a=await b.Cache.find(i.configuration);await i.resolveEverything({report:new b.ThrowReport,cache:a})}n=i.storedDescriptors.values()}else n=i.workspaces.flatMap(a=>{let u=[a.anchoredDescriptor];for(let[h,l]of a.anchoredPackage.dependencies.entries())e&&a.manifest.devDependencies.has(h)||u.push(l);return u});let r=b.miscUtils.sortMap(n,[a=>b.structUtils.stringifyIdent(a),a=>b.structUtils.isVirtualDescriptor(a)?"0":"1",a=>a.range]),o=new Set;for(let a of r.values()){let u=i.storedResolutions.get(a.descriptorHash);if(!u)continue;let h=i.storedPackages.get(u);if(!h)continue;let{descriptorHash:l}=b.structUtils.isVirtualDescriptor(a)?b.structUtils.devirtualizeDescriptor(a):a;o.has(l)||(o.add(l),s.set(a,h))}return s};function Ee(i){let t={},e=i.match(/^([^(<]+)/);if(e){let r=e[0].trim();r&&(t.name=r)}let s=i.match(/<([^>]+)>/);s&&(t.email=s[1]);let n=i.match(/\(([^)]+)\)/);return n&&(t.url=n[1]),t}var Ie=i=>{let{license:t,licenses:e,repository:s,homepage:n,author:r}=i,o=typeof r=="string"?Ee(r):r;return{license:(()=>{if(t)return ct(t);if(e){if(!Array.isArray(e))return ct(e);if(e.length===1)return ct(e[0]);if(e.length>1)return`(${e.map(ct).join(" OR ")})`}return Qt})(),url:Zt(s)||n,vendorName:o?.name,vendorUrl:n||o?.url}},Qt="UNKNOWN",ct=i=>(typeof i!="string"?i.type:i)||Qt,Zt=i=>{let t=typeof i=="string"?i:i?.url;if(!t)return t;let e=Jt.fromUrl(t);return!e||e.getDefaultRepresentation()!=="shortcut"?t:e.https()},Tt=(i,t,e)=>e?t:`${i}: ${t}`,te=async(i,t,e)=>{let s=await Xt(i,t,e),n=kt(i.configuration.get("nodeLinker")),r=n.getFs(),o=new Map;for(let u of s.values()){let h=await n.getPackagePath(i,u);if(h===null)continue;let l=JSON.parse(await r.readFilePromise(T.ppath.join(h,T.Filename.manifest),"utf8")),c=(await r.readdirPromise(h,{withFileTypes:!0})).filter($=>$.isFile()).map(({name:$})=>$),f=c.find($=>{let w=$.toLowerCase();return w==="license"||w.startsWith("license.")||w==="unlicense"||w.startsWith("unlicense.")});if(!f)continue;let y=await r.readFilePromise(T.ppath.join(h,f),"utf8"),d=c.find($=>{let w=$.toLowerCase();return w==="notice"||w.startsWith("notice.")}),p;d&&(p=await r.readFilePromise(T.ppath.join(h,d),"utf8"));let k=p?`${y}

NOTICE

${p}`:y,A=o.get(k);A?A.set(l.name,l):o.set(k,new Map([[l.name,l]]))}let a=`THE FOLLOWING SETS FORTH ATTRIBUTION NOTICES FOR THIRD PARTY SOFTWARE THAT MAY BE CONTAINED IN PORTIONS OF THE ${String(i.topLevelWorkspace.manifest.raw.name).toUpperCase().replace(/-/g," ")} PRODUCT.

`;for(let[u,h]of o.entries()){a+=`-----

`;let l=[],g=[];for(let{name:f,repository:y}of h.values()){l.push(f);let d=Zt(y);d&&g.push(h.size===1?d:`${d} (${f})`)}let c=[];c.push(`The following software may be included in this product: ${l.join(", ")}.`),g.length>0&&c.push(`A copy of the source code may be downloaded from ${g.join(", ")}.`),c.push("This software contains the following license and notice below:"),a+=`${c.join(" ")}

`,a+=`${u.trim()}

`}return a};var q=class extends W.Command{constructor(){super(...arguments);this.recursive=W.Option.Boolean("-R,--recursive",!1,{description:"Include transitive dependencies (dependencies of direct dependencies)"});this.production=W.Option.Boolean("--production",!1,{description:"Exclude development dependencies"});this.json=W.Option.Boolean("--json",!1,{description:"Format output as JSON"});this.excludeMetadata=W.Option.Boolean("--exclude-metadata",!1,{description:"Exclude dependency metadata from output"})}async execute(){let e=await Y.Configuration.find(this.context.cwd,this.context.plugins),{project:s,workspace:n}=await Y.Project.find(e,this.context.cwd);if(!n)throw new ee.WorkspaceRequiredError(s.cwd,this.context.cwd);await s.restoreInstallState();let r=await Kt(s,this.json,this.recursive,this.production,this.excludeMetadata);Y.treeUtils.emitTree(r,{configuration:e,stdout:this.context.stdout,json:this.json,separators:1})}};q.paths=[["licenses","list"]],q.usage=W.Command.Usage({description:"display the licenses for all packages in the project",details:`
      This command prints the license information for packages in the project. By default, only direct dependencies are listed.

      If \`-R,--recursive\` is set, the listing will include transitive dependencies (dependencies of direct dependencies).

      If \`--production\` is set, the listing will exclude development dependencies.
    `,examples:[["List all licenses of direct dependencies","$0 licenses list"],["List all licenses of direct and transitive dependencies","$0 licenses list --recursive"],["List all licenses of production dependencies only","$0 licenses list --production"]]});var ie=x("@yarnpkg/cli"),ht=x("@yarnpkg/core"),J=x("clipanion");var G=class extends J.Command{constructor(){super(...arguments);this.recursive=J.Option.Boolean("-R,--recursive",!1,{description:"Include transitive dependencies (dependencies of direct dependencies)"});this.production=J.Option.Boolean("--production",!1,{description:"Exclude development dependencies"})}async execute(){let e=await ht.Configuration.find(this.context.cwd,this.context.plugins),{project:s,workspace:n}=await ht.Project.find(e,this.context.cwd);if(!n)throw new ie.WorkspaceRequiredError(s.cwd,this.context.cwd);await s.restoreInstallState();let r=await te(s,this.recursive,this.production);this.context.stdout.write(r)}};G.paths=[["licenses","generate-disclaimer"]],G.usage=J.Command.Usage({description:"display the license disclaimer including all packages in the project",details:`
      This command prints the license disclaimer for packages in the project. By default, only direct dependencies are listed.

      If \`-R,--recursive\` is set, the disclaimer will include transitive dependencies (dependencies of direct dependencies).

      If \`--production\` is set, the disclaimer will exclude development dependencies.
    `,examples:[["Include licenses of direct dependencies","$0 licenses generate-disclaimer"],["Include licenses of direct and transitive dependencies","$0 licenses generate-disclaimer --recursive"],["Include licenses of production dependencies only","$0 licenses list --production"]]});var Ce={commands:[q,G]},Me=Ce;return ce(Ue);})();
return plugin;
}
};
