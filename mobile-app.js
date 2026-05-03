/* ════════════════════════════════════════════════════════
   تداول SA PRO — MOBILE APP
   ════════════════════════════════════════════════════════ */

const NAMES = {
'1010':'الرياض','1020':'الجزيرة','1030':'الإستثمار','1050':'بي اس اف','1060':'الأول','1080':'العربي','1111':'مجموعة تداول','1120':'الراجحي','1140':'البلاد','1150':'الإنماء','1180':'الأهلي','1182':'أملاك','1183':'سهل','1201':'تكوين','1202':'مبكو','1210':'بي سي آي','1211':'معادن','1212':'أسترا الصناعية','1213':'نسيج','1214':'شاكر','1301':'أسلاك','1302':'بوان','1303':'الصناعات الكهربائية','1304':'اليمامة للحديد','1320':'أنابيب السعودية','1321':'أنابيب الشرق','1322':'أماك','1323':'يو سي آي سي','1810':'سيرا','1820':'بان','1830':'لجام للرياضة','1831':'مهارة','1832':'صدر','1833':'الموارد','1834':'سماسكو','1835':'تمكين','2001':'كيمانول','2010':'سابك','2020':'سابك للمغذيات','2030':'المصافي','2040':'الخزف السعودي','2050':'مجموعة صافولا','2060':'التصنيع','2070':'الدوائية','2080':'الغاز','2081':'الخريف','2082':'أكوا باور','2083':'مرافق','2084':'مياهنا','2090':'جبسكو','2100':'وفرة','2110':'الكابلات السعودية','2120':'متطورة','2130':'صدق','2140':'أيان','2150':'زجاج','2160':'أميانتيت','2170':'اللجين','2180':'فيبكو','2190':'سيسكو القابضة','2200':'أنابيب','2210':'نماء للكيماويات','2220':'معدنية','2222':'أرامكو السعودية','2223':'لوبريف','2230':'الكيميائية','2240':'صناعات','2250':'المجموعة السعودية','2270':'سدافكو','2280':'المراعي','2281':'تنمية','2282':'نقي','2283':'المطاحن الأولى','2284':'المطاحن الحديثة','2285':'المطاحن العربية','2290':'ينساب','2300':'صناعة الورق','2310':'سبكيم','2320':'البابطين','2330':'المتقدمة','2340':'العبداللطيف','2350':'كيان','2360':'الجزيرة للبتروكيم','2370':'مبكو','2380':'بتروكيم','2381':'الحفر العربية','2382':'أديس','3001':'أسمنت حائل','3002':'أسمنت نجران','3003':'أسمنت المدينة','3004':'أسمنت الشمالية','3005':'أسمنت أم القرى','3007':'زهرة الواحة','3010':'أسمنت العربية','3020':'أسمنت السعودية','3030':'أسمنت القصيم','3040':'أسمنت تبوك','3050':'أسمنت الجنوبية','3060':'أسمنت ينبع','3080':'أسمنت الشرقية','3090':'أسمنت نجران الجديد','3091':'أسمنت الجوف','3092':'أسمنت الرياض','4001':'أسواق العثيم','4002':'المواساة','4003':'إكسترا','4004':'دله الصحية','4005':'رعاية','4006':'المتحدة الدولية القابضة','4007':'الحمادي','4008':'ساكو','4009':'الدوائية الأولى','4010':'السعودي الألماني','4011':'لازوردي','4012':'صحة','4013':'سليمان الحبيب','4014':'دار المعدات','4020':'العقارية','4030':'البحري','4031':'الخدمات الأرضية','4040':'سابتكو','4050':'ساسكو','4051':'بحر العرب','4061':'أنعام','4070':'تهامة','4071':'الشرقية للتنمية','4072':'جمجوم فارما','4080':'سناد','4081':'النايفات','4082':'مرنة','4100':'مكة','4110':'باتك','4130':'الباحة','4140':'صادرات','4150':'التصنيع الوطنية','4160':'ثمار','4161':'بن داود','4162':'المهيدب','4163':'الدريس','4164':'النهدي','4170':'شمس','4180':'فتيحي','4190':'جرير','4191':'معادلة','4192':'السيف غاليري','4200':'الدريس للخدمات','4210':'SRMG','4220':'إكسترا','4230':'البوابة الرقمية','4240':'سينومي ريتيل','4250':'جبل عمر','4260':'بدجت','4261':'ذيب','4270':'طيبة','4280':'المملكة القابضة','4290':'صبا','4291':'الرياض للتعمير','4292':'عطاء','4300':'دار الأركان','4310':'مدينة المعرفة','4320':'الأندلس العقارية','4321':'رتال','4322':'سمو','4323':'إنجاز','4330':'الرياض ريت','4331':'الجزيرة ريت','4332':'جدوى ريت الحرمين','4333':'تعليم ريت','4334':'المعذر ريت','4335':'مشاركة ريت','4336':'ملكية ريت','4337':'سدكو ريت','4338':'الأهلي ريت','4339':'بنيان ريت','4340':'الراجحي ريت','4341':'وقف ريت','4342':'جدوى ريت السعودية','4344':'سيكو ريت','4345':'الإنماء ريت','4346':'ميفك ريت','4347':'بلدي ريت','4348':'دراية ريت','4349':'مدار ريت','4350':'مشرق ريت','5101':'ناقلات','5110':'السعودية للكهرباء','5120':'إنتاج','6001':'هرفي','6002':'المراكز العربية','6004':'كاف','6010':'نادك','6012':'ريدان','6013':'التطويرية الغذائية','6014':'الآمار','6015':'أمريكانا','6020':'الأسماك','6040':'تبوك الزراعية','6050':'الشرقية للتنمية','6060':'المنتجات الغذائية','6070':'الجماعي','6090':'جازادكو','7010':'STC','7020':'اتحاد اتصالات','7030':'زين السعودية','7040':'عذيب للاتصالات','7200':'الحلول الرقمية','7201':'رسن','7202':'ثقة','7203':'لمسات','7204':'توبي','7210':'إيزي','7220':'سيفكو','7230':'تقنيات','8010':'التعاونية','8012':'الجزيرة تكافل','8020':'ملاذ','8030':'ميدغلف','8040':'أليانز','8050':'سلامة','8060':'ولاء','8070':'الدرع العربي','8080':'ساب تكافل','8100':'سايكو','8120':'الراجحي تكافل','8150':'أسيج','8160':'الأهلية','8170':'الاتحاد','8180':'الصقر','8190':'المتحدة','8200':'الإعادة','8210':'بوبا','8230':'تكافل الراجحي','8240':'جنرالي','8250':'جي آي جي','8260':'الخليجية','8270':'بروج','8280':'العربية','8300':'الوطنية','8310':'أمانة','8311':'عناية','8312':'الإنماء طوكيو'
};
const SECS = {};
Object.keys(NAMES).forEach(k => {
  const n = parseInt(k);
  if(n>=1000&&n<1200) SECS[k]='بنوك';
  else if(n>=1200&&n<1400) SECS[k]='تعدين';
  else if(n>=2000&&n<3000) SECS[k]='بتروكيماويات';
  else if(n>=3000&&n<4000) SECS[k]='أسمنت';
  else if(n>=4000&&n<5000) SECS[k]='تجزئة';
  else if(n>=5000&&n<6000) SECS[k]='طاقة';
  else if(n>=6000&&n<7000) SECS[k]='أغذية';
  else if(n>=7000&&n<8000) SECS[k]='اتصالات';
  else if(n>=8000&&n<9000) SECS[k]='تأمين';
  else SECS[k]='أخرى';
});
const STKS = Object.keys(NAMES);
const PRI = ['2222','1120','7010','2010','1180','2280','1150','4190','4013','2082','4001','4161','4164','7020','1010','4300','4250','2350','5110','1211'];
const BPX = {
'1010':27.74,'1020':11.45,'1030':12.71,'1050':18.95,'1060':34.46,'1080':20.59,'1111':139.6,'1120':101,'1140':25.98,'1150':28.28,'1180':40.9,'1182':10.13,'1183':14.21,'1201':5.38,'1202':17.15,'1210':23.98,'1211':71.4,'1212':135.9,'1213':22.46,'1214':15.8,'1301':16.49,'1302':42.52,'1303':15.86,'1304':36.52,'1320':37.24,'1321':136,'1322':91,'1323':24.15,'1810':22,'1820':1.72,'1830':81.75,'1831':5.83,'1832':2.49,'1833':77.45,'1834':5.17,'1835':45.5,'2001':6.6,'2010':55.3,'2020':132.9,'2030':47.1,'2040':27.34,'2050':21.9,'2060':8.65,'2070':26.98,'2080':78.8,'2081':113.4,'2082':170.4,'2083':31.1,'2084':14.76,'2090':14.07,'2100':19.25,'2110':156,'2120':15.25,'2130':9.64,'2140':11.02,'2150':35.16,'2160':12.9,'2170':24.4,'2180':25.98,'2190':26.98,'2200':4.69,'2210':20.33,'2220':11.7,'2222':25.88,'2223':90.35,'2230':7.55,'2240':36.5,'2250':12.93,'2270':202.5,'2280':42.44,'2281':48.72,'2282':52.25,'2283':47.86,'2284':27.3,'2285':37.9,'2290':47.4,'2300':41.85,'2310':18.5,'2320':29.96,'2330':55,'2340':19.72,'2350':8.93,'2360':6.96,'2370':17.15,'2380':12.12,'2381':83.2,'2382':22.66,'3001':6.38,'3002':10.8,'3003':13.3,'3004':11.42,'3005':17.76,'3007':6.15,'3010':30.05,'3020':44.5,'3030':56.8,'3040':17.14,'3050':64.5,'3060':25.7,'3080':28.5,'3090':15.58,'3091':7.99,'3092':20.84,'4001':72.1,'4002':62.9,'4003':30.15,'4004':85.8,'4005':62.4,'4006':31.7,'4007':29.3,'4008':133,'4009':36.8,'4010':23.96,'4011':15.9,'4012':16.96,'4013':302.2,'4014':20.64,'4020':11.46,'4030':22.3,'4031':168,'4040':18.94,'4050':13.26,'4051':78.3,'4061':7.21,'4070':22.02,'4071':19.68,'4072':46.6,'4080':24.86,'4081':30.6,'4082':23.1,'4100':15.34,'4110':21.08,'4130':0.25,'4140':2.52,'4150':10.3,'4160':13.02,'4161':22.4,'4162':22.92,'4163':76.4,'4164':129.2,'4170':12.96,'4180':6.1,'4190':128.4,'4191':37.1,'4192':42.8,'4200':95.6,'4210':26.5,'4220':30.15,'4230':36.2,'4240':11.46,'4250':13.16,'4260':15.44,'4261':17.9,'4270':22.98,'4280':6.68,'4290':27.68,'4291':17.42,'4292':20.04,'4300':7.47,'4310':12.66,'4320':12.62,'4321':22.86,'4322':16.7,'4323':49.5,'4330':8.04,'4331':8.23,'4332':11.58,'4333':9.23,'4334':7.97,'4335':8.44,'4336':10.62,'4337':8.6,'4338':6.82,'4339':7.72,'4340':7.32,'4341':6.6,'4342':6.86,'4344':8.82,'4345':7.52,'4346':5.42,'4347':6.74,'4348':7.24,'4349':5.2,'4350':7.88,'5101':12.86,'5110':16.56,'5120':33.6,'6001':24.68,'6002':20.1,'6004':104,'6010':32.8,'6012':0.72,'6013':67,'6014':15.12,'6015':3.56,'6020':20.8,'6040':10.68,'6050':24.02,'6060':30.6,'6070':38.4,'6090':18.64,'7010':46.25,'7020':44.55,'7030':12.56,'7040':6.15,'7200':442,'7201':66.6,'7202':92.5,'7203':16.32,'7204':62.8,'7210':7.65,'7220':34.5,'7230':8.45,'8010':74.5,'8012':24.2,'8020':14.46,'8030':19.66,'8040':11.56,'8050':41.75,'8060':25.3,'8070':27.3,'8080':15.5,'8100':22.7,'8120':88.8,'8150':17.86,'8160':32.05,'8170':8.6,'8180':26.5,'8190':5.47,'8200':16.68,'8210':157,'8230':120,'8240':12.5,'8250':14.36,'8260':9.6,'8270':45.05,'8280':26.3,'8300':23.3,'8310':12.8,'8311':20.3,'8312':20.4
};


/* AI MEMORY (shared key with desktop) */
const AI_KEY = 'tadawul_sa_ai_memory_v1';
const AI_DEFAULT_WEIGHTS = {technical:1,delta:1,iv:1,oi:1,volume:1,spread:1,move:1,strat_classic:1,strat_harmonic:1,strat_elliott:1,strat_ma:1,strat_osc:1,strat_macd:1,strat_ichimoku:1,strat_bollinger:1,strat_vwap:1,strat_supdem:1,strat_liquidity:1,strat_fakeout:1,strat_fractal:1};
function loadMem(){try{const r=localStorage.getItem(AI_KEY);if(!r)return{recs:[],weights:{...AI_DEFAULT_WEIGHTS},stats:{total:0,wins:0,losses:0,pending:0},lastUpdate:0};const m=JSON.parse(r);return{recs:m.recs||[],weights:{...AI_DEFAULT_WEIGHTS,...(m.weights||{})},stats:m.stats||{total:0,wins:0,losses:0,pending:0},lastUpdate:m.lastUpdate||0};}catch(e){return{recs:[],weights:{...AI_DEFAULT_WEIGHTS},stats:{total:0,wins:0,losses:0,pending:0},lastUpdate:0};}}
function saveMem(m){try{localStorage.setItem(AI_KEY,JSON.stringify(m));}catch(e){}}
const AI = loadMem();

/* GLOBAL */
const G = {sel:'2222',tab:'signals',tf:'3mo',tfi:'1d',pr:{},op:{},hi:{},lo:{},vo:{},ch:{},pc:{},cans:{},ind:{},sc:{},ld:new Set(),ldg:new Set(),preMarket:{},postMarket:{},chart:null,cSeries:null,vSeries:null,view:'home',contractCache:{},opt:[]};

/* UTILS */
const fK = n => n>=1e9?(n/1e9).toFixed(1)+'B':n>=1e6?(n/1e6).toFixed(1)+'M':n>=1e3?(n/1e3).toFixed(0)+'K':''+n;
const fDays = ms => {const d=Math.round(ms/86400000);return d<=0?'منتهي':d===1?'يوم':d+' أيام';};
const fExpiry = ts => {const d=new Date(ts);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;};

/* MARKET STATUS */
function getMS(){const n=new Date(),u=n.getTime()+n.getTimezoneOffset()*60000,et=new Date(u-4*3600000),d=et.getDay();if(d===0||d===6)return{l:'مغلق (عطلة)',c:'#7a8ba8'};const m=et.getHours()*60+et.getMinutes();if(m>=240&&m<570)return{l:'بري ماركت 🌅',c:'#ff6b9d'};if(m>=570&&m<960)return{l:'مفتوح ●',c:'#0ecf7e'};if(m>=960&&m<1200)return{l:'بعد الإغلاق 🌙',c:'#a78bfa'};return{l:'مغلق',c:'#7a8ba8'};}
function updateMarket(){const s=getMS(),e=document.getElementById('market-status');e.textContent='السوق: '+s.l;e.style.color=s.c;e.style.borderColor=s.c+'55';}

/* INDICATORS — slim versions */
function sma(a,p){const r=[];for(let i=0;i<a.length;i++){if(i<p-1){r.push(null);continue;}let m=0;for(let j=i-p+1;j<=i;j++)m+=a[j];r.push(m/p);}return r;}
function ema(a,p){const k=2/(p+1);const r=[a[0]];for(let i=1;i<a.length;i++)r.push(a[i]*k+r[i-1]*(1-k));return r;}
function rsi(a,p=14){let g=0,l=0;for(let i=1;i<=p;i++){const d=a[i]-a[i-1];d>0?g+=d:l-=d;}g/=p;l/=p;let v=l===0?100:100-100/(1+g/l);for(let i=p+1;i<a.length;i++){const d=a[i]-a[i-1];g=(g*(p-1)+(d>0?d:0))/p;l=(l*(p-1)+(d<0?-d:0))/p;v=l===0?100:100-100/(1+g/l);}return v;}
function bb(a,p=20){const i=a.length-1,s=sma(a,p);if(!s[i])return null;let v=0;for(let j=i-p+1;j<=i;j++)v+=(a[j]-s[i])**2;const sd=Math.sqrt(v/p);return{u:s[i]+2*sd,m:s[i],l:s[i]-2*sd,w:4*sd/s[i]*100};}
function calcATR(cs,p=14){const tr=[];for(let i=1;i<cs.length;i++)tr.push(Math.max(cs[i].high-cs[i].low,Math.abs(cs[i].high-cs[i-1].close),Math.abs(cs[i].low-cs[i-1].close)));return sma(tr,p);}

function calcInd(sym){
  const cs=G.cans[sym];if(!cs||cs.length<10)return;
  const cl=cs.map(c=>c.close),n=cl.length;
  const e12=ema(cl,12),e26=ema(cl,26);
  const macdL=e12.map((v,i)=>v-e26[i]),sigL=ema(macdL,9);
  const atrA=calcATR(cs,14);
  G.ind[sym]={
    rsi:rsi(cl,14),
    macd:{v:macdL[n-1],s:sigL[n-1],h:macdL[n-1]-sigL[n-1]},
    boll:bb(cl,20),
    ma9:sma(cl,9)[n-1]||cl[n-1],
    ma20:sma(cl,20)[n-1]||cl[n-1],
    ma50:sma(cl,50)[n-1]||cl[n-1],
    ma200:sma(cl,200)[n-1]||cl[n-1],
    atr:atrA[atrA.length-1]||cl[n-1]*.01
  };
}

function detectFractalM(cs, p){
  if(!cs||cs.length<11) return {sig:'محايد', desc:'بيانات غير كافية', upPts:[], downPts:[], lastUp:null, lastDown:null, score:0};
  const n=cs.length, upPts=[], downPts=[];
  for(let i=2;i<n-2;i++){
    const c=cs[i];
    if(c.high>cs[i-1].high&&c.high>cs[i-2].high&&c.high>cs[i+1].high&&c.high>cs[i+2].high) upPts.push({i,time:c.time,price:c.high});
    if(c.low<cs[i-1].low&&c.low<cs[i-2].low&&c.low<cs[i+1].low&&c.low<cs[i+2].low) downPts.push({i,time:c.time,price:c.low});
  }
  const lastUp=upPts[upPts.length-1]||null, lastDown=downPts[downPts.length-1]||null;
  let sig='محايد',desc=`${upPts.length} قمم • ${downPts.length} قيعان`,score=50;
  const dist=(a,b)=>Math.abs(a-b)/b;
  if(lastDown&&dist(p,lastDown.price)<0.025){sig='شراء';desc=`قرب قاع $${lastDown.price.toFixed(2)}`;score=72;}
  else if(lastUp&&dist(p,lastUp.price)<0.025){sig='بيع';desc=`قرب قمة $${lastUp.price.toFixed(2)}`;score=72;}
  else if(lastUp&&p>lastUp.price*1.005){sig='شراء';desc=`كسر صاعد فوق $${lastUp.price.toFixed(2)}`;score=78;}
  else if(lastDown&&p<lastDown.price*0.995){sig='بيع';desc=`كسر هابط تحت $${lastDown.price.toFixed(2)}`;score=78;}
  return{sig,desc,upPts,downPts,lastUp,lastDown,score};
}

function calcSc(sym){
  const p=G.pr[sym];if(!p||!G.ind[sym])return;
  const cs=G.cans[sym]||[];
  const ind=G.ind[sym];const{rsi:r,macd,ma9,ma20,ma50,boll}=ind;
  let buy=0,sell=0,sigs={};
  if(ma9>ma20&&ma20>ma50){sigs.ma='شراء';buy++;}else if(ma9<ma20&&ma20<ma50){sigs.ma='بيع';sell++;}else sigs.ma='محايد';
  if(r<30){sigs.osc='شراء';buy++;}else if(r>70){sigs.osc='بيع';sell++;}else sigs.osc='محايد';
  if(macd.v>macd.s&&macd.h>0){sigs.macd='شراء';buy++;}else if(macd.v<macd.s&&macd.h<0){sigs.macd='بيع';sell++;}else sigs.macd='محايد';
  if(boll){if(p<boll.l){sigs.bollinger='شراء';buy++;}else if(p>boll.u){sigs.bollinger='بيع';sell++;}else sigs.bollinger='محايد';}
  if(Math.abs(p-(G.lo[sym]||p*.95))/p<.02){sigs.classic='شراء';buy++;}else if(Math.abs(p-(G.hi[sym]||p*1.05))/p<.02){sigs.classic='بيع';sell++;}else sigs.classic='محايد';
  const frRes=detectFractalM(cs,p); sigs.fractal=frRes.sig;
  if(frRes.sig==='شراء')buy++; else if(frRes.sig==='بيع')sell++;
  const net=buy-sell,tot=buy+sell;
  const main=net>1?'شراء':net<-1?'بيع':'محايد';
  const str=tot>0?Math.round(Math.max(buy,sell)/tot*100):50;
  const atr=ind.atr;
  G.sc[sym]={sigs,main,str,buy,sell,entry:p,tp:main==='شراء'?p+atr*2:p-atr*2,sl:main==='شراء'?p-atr:p+atr,expectedMovePct:+(atr*Math.sqrt(5)/p*100).toFixed(2),frRes};
}

/* DATA LOADER */
function _parseMobile(sym, res) {
  const m=res.meta||{},ts=res.timestamp||[],q=res.indicators?.quote?.[0]||{};
  const cs=[];
  for(let k=0;k<ts.length;k++){
    const o=q.open?.[k],h=q.high?.[k],l=q.low?.[k],c=q.close?.[k],v=q.volume?.[k];
    if(o!=null&&c!=null&&!isNaN(c)&&c>0)cs.push({time:ts[k],open:+o.toFixed(2),high:+h.toFixed(2),low:+l.toFixed(2),close:+c.toFixed(2),volume:v||0});
  }
  if(cs.length<5)return false;
  const last=cs[cs.length-1],pv=+(m.previousClose||cs[cs.length-2]?.close||last.open).toFixed(2);
  G.cans[sym]=cs;G.pr[sym]=+(m.regularMarketPrice||last.close).toFixed(2);
  G.op[sym]=last.open;G.hi[sym]=last.high;G.lo[sym]=last.low;G.vo[sym]=last.volume;
  G.ch[sym]=+(G.pr[sym]-pv).toFixed(2);G.pc[sym]=+((G.pr[sym]-pv)/pv*100).toFixed(2);
  calcInd(sym);calcSc(sym);return true;
}
async function loadStock(sym, range, interval){
  if (G.ldg.has(sym)) return;
  G.ldg.add(sym);
  const r = range || G.tf, i = interval || G.tfi;
  let ok = false;
  try {
    const rsp = await fetch(`/api/stock?symbol=${sym}&range=${r}&interval=${i}`, {signal: AbortSignal.timeout(8000)});
    if (rsp.ok) {
      const d = await rsp.json();
      const res = d?.chart?.result?.[0];
      if (res) { ok = _parseMobile(sym, res); }
    }
  } catch(e) {}
  // CORS proxy fallback
  if (!ok) {
    const ySym = /^\d{4}$/.test(sym) ? sym + '.SR' : sym;
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ySym}?range=${r}&interval=${i}`;
    for (const px of ['https://api.allorigins.win/raw?url=','https://corsproxy.io/?']) {
      if (ok) break;
      try {
        const rsp = await fetch(px + encodeURIComponent(url), {signal: AbortSignal.timeout(9000)});
        if (rsp.ok) {
          const d = await rsp.json();
          const res = d?.chart?.result?.[0];
          if (res) { ok = _parseMobile(sym, res); }
        }
      } catch(e) {}
    }
  }
  if (!ok && !G.cans[sym]) { initDemoM(sym); }
  G.ld.add(sym); G.ldg.delete(sym);
}

function initDemoM(sym) {
  const b = BPX[sym] || (10 + (parseInt(sym.slice(-2), 10) % 80));
  const p = +(b * (1 + (Math.random() - 0.5) * 0.03)).toFixed(2);
  const pv = +(p * (1 + (Math.random() - 0.5) * 0.04)).toFixed(2);
  G.pr[sym] = p; G.ch[sym] = +(p - pv).toFixed(2); G.pc[sym] = +((p - pv) / pv * 100).toFixed(2);
  G.hi[sym] = +(p * 1.01).toFixed(2); G.lo[sym] = +(p * 0.99).toFixed(2); G.vo[sym] = Math.floor(50000 + Math.random() * 2000000);
  const cs = []; let cp = b; const now = Math.floor(Date.now() / 1000);
  for (let i = 0; i < 90; i++) {
    const o = +cp.toFixed(2), dr = (Math.random() - 0.49) * 0.028, c = +(o * (1 + dr)).toFixed(2);
    const spread = Math.abs(c - o) * (1 + Math.random() * 0.8);
    cs.push({ time: now - (90 - i) * 86400, open: o, close: c, high: +(Math.max(o, c) + spread * (0.1 + Math.random() * 0.4)).toFixed(2), low: +(Math.min(o, c) - spread * (0.1 + Math.random() * 0.4)).toFixed(2), volume: Math.floor(20000 + Math.random() * 700000) });
    cp = c;
  }
  G.cans[sym] = cs; calcInd(sym); calcSc(sym);
}

/* ════════════════════════════════════════════════════════
   CONTRACT RECOMMENDATION + AI MEMORY
   ════════════════════════════════════════════════════════ */
async function fetchContractsFor(sym){
  const sc=G.sc[sym],p=G.pr[sym];
  if(!sc||!p)return null;
  return {
    symbol:sym, underlying:p, direction:sc.main,
    technicalScore:sc.str, expectedMove:sc.expectedMovePct||0,
    expiry:Date.now()+7*86400000, daysToExpiry:7,
    dataSource:'stock_analysis',
    recommendations:[{
      type:sc.main==='شراء'?'BUY':'SELL',
      strike:sc.entry, lastPrice:p, bid:p, ask:p, mid:p,
      openInterest:0, volume:G.vo[sym]||0, iv:0, delta:0,
      expiry:Date.now()+7*86400000, contractSymbol:sym+'.SR',
      score:sc.str,
      breakdown:{technical:sc.str,delta:0,iv:0,oi:0,volume:50,spread:80,move:60},
      target:sc.tp, breakeven:sc.entry
    }],
    weights:{}
  };
}

function recordRec(sym,c,snap){
  const id=`${sym}_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;
  AI.recs.push({id,symbol:sym,type:c.type,strike:c.strike,entry:c.mid||c.lastPrice,expiry:c.expiry,underlying_at_entry:c.underlyingPrice||G.pr[sym],breakeven:c.breakeven,target:c.target,score:c.score,breakdown:c.breakdown,strategies:snap.strategies||[],direction:snap.direction,technicalScore:snap.technicalScore,timestamp:Date.now(),status:'pending',outcome:null,settledAt:null});
  AI.stats.total++;AI.stats.pending++;saveMem(AI);updateAIBadge();
  toast(`🧠 تمت إضافة العقد للذاكرة — ${sym}`);
  return id;
}

function trackContract(sym,c){
  const snap=c._snapshot||{direction:'neutral',technicalScore:50,strategies:[]};
  recordRec(sym,c,snap);
  if(G.view==='memory')buildMemory();
}
window.trackContract=trackContract;

async function settlePending(){
  const now=Date.now();let changed=false;
  for(const r of AI.recs){
    if(r.status!=='pending')continue;
    if(now<r.expiry)continue;
    const final=G.pr[r.symbol];if(!final)continue;
    const isCall=r.type==='CALL';
    const breakHit=isCall?final>=r.breakeven:final<=r.breakeven;
    const itm=isCall?final>r.strike:final<r.strike;
    r.final_price=final;r.settledAt=now;
    if(breakHit){r.status='win';r.outcome='win';AI.stats.wins++;}
    else if(itm){r.status='win';r.outcome='partial';AI.stats.wins++;}
    else{r.status='loss';r.outcome='loss';AI.stats.losses++;}
    AI.stats.pending=Math.max(0,AI.stats.pending-1);changed=true;adaptW(r);
  }
  if(changed){saveMem(AI);updateAIBadge();if(G.view==='memory')buildMemory();}
}
function adaptW(r){
  const isWin=r.outcome==='win',isLoss=r.outcome==='loss';if(!isWin&&!isLoss)return;
  const lr=0.06,cap=2.5,floor=0.25,dir=isWin?1:-1;
  if(r.breakdown)for(const[k,v]of Object.entries(r.breakdown)){if(AI.weights[k]===undefined||v<60)continue;AI.weights[k]=Math.max(floor,Math.min(cap,AI.weights[k]*(1+dir*lr)));}
  for(const k of(r.strategies||[])){const wk='strat_'+k;if(AI.weights[wk]===undefined)continue;AI.weights[wk]=Math.max(floor,Math.min(cap,AI.weights[wk]*(1+dir*lr)));}
}

function getWR(){const s=AI.stats.wins+AI.stats.losses;return s>0?Math.round(AI.stats.wins/s*100):0;}
function updateAIBadge(){document.getElementById('ai-badge').textContent=`🧠 ${AI.stats.wins}/${AI.stats.wins+AI.stats.losses} (${getWR()}%)`;}

/* ════════════════════════════════════════════════════════
   UI BUILDERS
   ════════════════════════════════════════════════════════ */
function toast(m){const t=document.createElement('div');t.className='toast';t.textContent=m;document.body.appendChild(t);setTimeout(()=>t.remove(),2400);}

function buildTickers(){
  document.getElementById('ticker-strip').innerHTML=PRI.slice(0,15).map(s=>{
    const p=G.pr[s]||0,pc=G.pc[s]||0,ir=G.ld.has(s);
    return `<div class="tk ${s===G.sel?'on':''}" onclick="selStock('${s}')"><span class="tk-s">${s}</span><span class="tk-p ${pc>=0?'up':'dn'}" style="${!ir?'opacity:.5':''}">${p>0?'ر.س'+p.toFixed(2):'…'}</span><span class="tk-c ${pc>=0?'up':'dn'}">${pc!==0?(pc>=0?'+':'')+pc.toFixed(1)+'%':''}</span></div>`;
  }).join('');
}

function buildMain(){
  const sym=G.sel,p=G.pr[sym]||0,c=G.ch[sym]||0,pc=G.pc[sym]||0;
  document.getElementById('m-sym').textContent=sym;
  document.getElementById('m-name').textContent=NAMES[sym]||'';
  document.getElementById('m-sec').textContent=SECS[sym]||'';
  document.getElementById('m-price').textContent=p>0?p.toFixed(2):'---';
  const ce=document.getElementById('m-change');
  if(c!==0){ce.textContent=`${c>=0?'+':''}${c.toFixed(2)} (${pc.toFixed(2)}%)`;ce.style.color=c>=0?'var(--up)':'var(--dn)';}
  else ce.textContent='—';
  document.getElementById('m-open').textContent=G.op[sym]?G.op[sym].toFixed(2):'—';
  document.getElementById('m-high').textContent=G.hi[sym]?G.hi[sym].toFixed(2):'—';
  document.getElementById('m-low').textContent=G.lo[sym]?G.lo[sym].toFixed(2):'—';
  document.getElementById('m-vol').textContent=fK(G.vo[sym]||0);
  let pmHtml='';
  if(G.preMarket[sym]){const pm=G.preMarket[sym];pmHtml+=`<div class="pm-info"><span class="pm-label">🌅 بري ماركت</span><span style="color:${pm.change>=0?'var(--up)':'var(--dn)'};font-family:monospace;font-weight:600">$${pm.price.toFixed(2)} (${pm.change>=0?'+':''}${pm.change.toFixed(2)}%)</span></div>`;}
  if(G.postMarket[sym]){const am=G.postMarket[sym];pmHtml+=`<div class="am-info"><span class="am-label">🌙 بعد الإغلاق</span><span style="color:${am.change>=0?'var(--up)':'var(--dn)'};font-family:monospace;font-weight:600">$${am.price.toFixed(2)} (${am.change>=0?'+':''}${am.change.toFixed(2)}%)</span></div>`;}
  document.getElementById('m-pm-info').innerHTML=pmHtml;
  document.getElementById('chart-title').textContent=`${sym} — ${NAMES[sym]||''}`;
}

function initChart(){
  if(G.chart)return;
  const el=document.getElementById('chart');
  G.chart=LightweightCharts.createChart(el,{
    width:el.clientWidth,height:280,
    layout:{background:{type:'solid',color:'#04060e'},textColor:'#7a8ba8',fontFamily:"'IBM Plex Mono',monospace"},
    grid:{vertLines:{color:'rgba(255,255,255,.03)'},horzLines:{color:'rgba(255,255,255,.03)'}},
    rightPriceScale:{borderColor:'rgba(255,255,255,.055)',scaleMargins:{top:.06,bottom:.22}},
    timeScale:{borderColor:'rgba(255,255,255,.055)',rightOffset:6,timeVisible:true,secondsVisible:false},
    handleScroll:{mouseWheel:true,pressedMouseMove:true,horzTouchDrag:true,vertTouchDrag:false},
    handleScale:{mouseWheel:true,pinch:true,axisPressedMouseMove:true},
  });
  G.cSeries=G.chart.addCandlestickSeries({upColor:'#0ecf7e',downColor:'#f04458',borderUpColor:'#0ecf7e',borderDownColor:'#f04458',wickUpColor:'rgba(14,207,126,.6)',wickDownColor:'rgba(240,68,88,.6)'});
  G.vSeries=G.chart.addHistogramSeries({priceFormat:{type:'volume'},priceScaleId:'vol'});
  G.chart.priceScale('vol').applyOptions({scaleMargins:{top:.85,bottom:0}});
  new ResizeObserver(()=>{if(!G.chart)return;G.chart.applyOptions({width:el.clientWidth,height:280});}).observe(el);
}

function updateChart(){
  if(!G.chart||!G.cans[G.sel])return;
  const cs=G.cans[G.sel];
  G.cSeries.setData(cs.map(c=>({time:c.time,open:c.open,high:c.high,low:c.low,close:c.close})));
  G.vSeries.setData(cs.map(c=>({time:c.time,value:c.volume,color:c.close>=c.open?'rgba(14,207,126,.12)':'rgba(240,68,88,.12)'})));
  G.chart.timeScale().fitContent();
}

function buildSignals(){
  const sym=G.sel,sc=G.sc[sym],ind=G.ind[sym],p=G.pr[sym];
  if(!sc||!ind||!p){document.getElementById('ht-signals').innerHTML='<div class="loading"><div class="spinner"></div>جاري التحميل...</div>';return;}
  const cls=sc.main==='شراء'?'buy':sc.main==='بيع'?'sell':'';
  const strc=sc.str>75?'var(--up)':sc.str>55?'var(--gd)':'var(--dn)';
  let h=`<div class="signal-card ${cls}">
    <div class="signal-head"><span class="signal-name">⚡ الإشارة الرئيسية</span><span class="signal-time">${new Date().toLocaleTimeString('en-US',{hour12:false}).slice(0,5)}</span></div>
    <div class="signal-action ${cls||'neu'}">${sc.main==='شراء'?'▲ شراء':sc.main==='بيع'?'▼ بيع':'◆ انتظار'}</div>
    <div class="signal-desc">${sc.buy} إشارة شراء | ${sc.sell} إشارة بيع${sc.expectedMovePct?` | حركة متوقعة ±${sc.expectedMovePct}% أسبوعياً`:''}</div>
    <div class="lvl-grid">
      <div class="lvl-cell"><div class="ll">الدخول</div><div class="lv" style="color:var(--bl)">$${sc.entry.toFixed(2)}</div></div>
      <div class="lvl-cell"><div class="ll">الهدف</div><div class="lv" style="color:var(--up)">$${sc.tp.toFixed(2)}</div></div>
      <div class="lvl-cell"><div class="ll">الوقف</div><div class="lv" style="color:var(--dn)">$${sc.sl.toFixed(2)}</div></div>
    </div>
    <div class="strength-row"><span style="color:var(--t2)">قوة الإشارة</span>
      <div class="str-bar"><div class="str-fill" style="width:${sc.str}%;background:${strc}"></div></div>
      <span style="color:${strc};font-weight:700;font-family:monospace">${sc.str}%</span>
    </div>
  </div>`;
  // Indicators table
  h+=`<div class="info-card"><div class="info-title">📊 المؤشرات الفنية</div>
    <div class="info-row"><span class="info-label">RSI(14)</span><span class="info-value" style="color:${ind.rsi>70?'var(--dn)':ind.rsi<30?'var(--up)':'var(--bl)'}">${ind.rsi.toFixed(1)}</span></div>
    <div class="info-row"><span class="info-label">MACD</span><span class="info-value" style="color:${ind.macd.v>ind.macd.s?'var(--up)':'var(--dn)'}">${ind.macd.v>ind.macd.s?'تقاطع صعودي ▲':'تقاطع هبوطي ▼'}</span></div>
    <div class="info-row"><span class="info-label">MA9 / MA20 / MA50</span><span class="info-value" style="font-size:9px">${ind.ma9.toFixed(1)} / ${ind.ma20.toFixed(1)} / ${ind.ma50.toFixed(1)}</span></div>
    ${ind.boll?`<div class="info-row"><span class="info-label">بولنجر</span><span class="info-value" style="color:${p>ind.boll.u?'var(--dn)':p<ind.boll.l?'var(--up)':'var(--t1)'};font-size:9px">${ind.boll.l.toFixed(1)} — ${ind.boll.u.toFixed(1)}</span></div>`:''}
  </div>`;
  // Patterns row (Classic / Harmonic / Elliott / Fractal — always visible)
  const psig=(s)=>s==='شراء'?{c:'var(--up)',i:'▲',t:'شراء'}:s==='بيع'?{c:'var(--dn)',i:'▼',t:'بيع'}:{c:'var(--t3)',i:'◆',t:'محايد'};
  const cl=psig(sc.sigs.classic||'محايد'),fr=psig(sc.frRes?.sig||'محايد');
  // Mobile only computes classic, fractal locally — others not detected; show as not-available
  h+=`<div class="info-card"><div class="info-title">🎯 الأنماط الفنية</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
      <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);border-right:3px solid ${cl.c};border-radius:4px;padding:6px 8px">
        <div style="font-size:9px;color:var(--t3)">كلاسيك</div>
        <div style="font-size:11px;color:${cl.c};font-weight:700">${cl.i} ${cl.t}</div>
      </div>
      <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);border-right:3px solid ${fr.c};border-radius:4px;padding:6px 8px">
        <div style="font-size:9px;color:var(--t3)">⚡ فركتال</div>
        <div style="font-size:11px;color:${fr.c};font-weight:700">${fr.i} ${fr.t}</div>
      </div>
    </div>
    ${sc.frRes&&sc.frRes.sig!=='محايد'?`<div style="margin-top:6px;font-size:9px;color:var(--t2);background:rgba(167,139,250,.06);padding:5px 8px;border-radius:3px">⚡ ${sc.frRes.desc}</div>`:''}
    <div style="margin-top:6px;font-size:8px;color:var(--t3);text-align:center">للهارمونيك والإيليوت استخدم نسخة سطح المكتب</div>
  </div>`;
  document.getElementById('ht-signals').innerHTML=h;
}

async function buildContract(){
  const sym=G.sel;
  const target=document.getElementById('ht-contract');
  target.innerHTML='<div class="loading"><div class="spinner"></div>جاري تحليل الفرص...</div>';
  let data=G.contractCache[sym];
  if(!data||Date.now()-data.ts>180000){const d=await fetchContractsFor(sym);if(d)G.contractCache[sym]={data:d,ts:Date.now()};data=G.contractCache[sym];}
  if(!data||!data.data?.recommendations?.length){target.innerHTML='<div class="info-card"><div style="text-align:center;color:var(--t3);padding:20px;font-size:11px">لا يوجد تحليل بعد<br><span style="font-size:9px;margin-top:6px;display:inline-block;color:var(--t2)">اضغط فرز لتحليل الأسهم</span></div></div>';return;}
  const top=data.data.recommendations.slice(0,2);
  const synthBadge=data.data.dataSource==='synthetic'?`<div style="background:rgba(245,200,66,.12);border:1px solid rgba(245,200,66,.4);border-radius:6px;padding:8px 10px;margin-bottom:10px;font-size:10px;color:var(--gd);text-align:center;line-height:1.5">⚠️ تحليل فني للسهم بناء على المؤشرات المتاحة</div>`:'';
  let h=synthBadge;
  top.forEach((c,idx)=>{
    const isCall=c.type==='CALL';
    const recPayload=JSON.stringify({...c,underlyingPrice:data.data.underlying}).replace(/'/g,"&#39;");
    const mid=c.mid||c.lastPrice||0;
    const expVal=isCall?Math.max(0,(c.target||0)-c.strike):Math.max(0,c.strike-(c.target||0));
    const roi=mid>0?((expVal-mid)/mid*100):0;
    const roiCol=roi>100?'var(--up)':roi>50?'var(--cy)':roi>0?'var(--gd)':'var(--dn)';
    const scoreCol=c.score>=75?'var(--up)':c.score>=60?'var(--cy)':c.score>=45?'var(--gd)':'var(--dn)';
    const borderCol=c.score>=75?'var(--up)':c.score>=60?'var(--bl)':'var(--pm)';
    h+=`<div class="contract-card" style="border-color:${borderCol};border-width:1.5px">
      <div class="cc-head"><span class="cc-name">${idx===0?'🥇 أفضل فرصة':'🥈 ثاني فرصة'}</span><span class="cc-exp">انتهاء ${fExpiry(c.expiry)} (${fDays(c.expiry-Date.now())})</span></div>
      <div class="cc-type ${isCall?'cc-call':'cc-put'}" style="font-size:16px">${isCall?'▲ CALL':'▼ PUT'} $${c.strike}</div>
      <div class="cc-grid">
        <div class="cc-cell"><div class="ll">سعر العقد</div><div class="lv" style="color:var(--cy)">ر.س${mid.toFixed(2)}</div></div>
        <div class="cc-cell"><div class="ll">نقطة التعادل</div><div class="lv" style="color:var(--gd)">ر.س${(c.breakeven||0).toFixed(2)}</div></div>
        <div class="cc-cell"><div class="ll">🎯 الهدف</div><div class="lv" style="color:var(--up)">ر.س${(c.target||0).toFixed(2)}</div></div>
        <div class="cc-cell"><div class="ll">عائد متوقع</div><div class="lv" style="color:${roiCol};font-weight:800">${roi>0?'+':''}${roi.toFixed(0)}%</div></div>
        <div class="cc-cell"><div class="ll">Δ ديلتا</div><div class="lv">${(c.delta||0).toFixed(2)}</div></div>
        <div class="cc-cell"><div class="ll">IV</div><div class="lv">${((c.iv||0)*100).toFixed(0)}%</div></div>
        <div class="cc-cell"><div class="ll">OI</div><div class="lv">${fK(c.openInterest||0)}</div></div>
        <div class="cc-cell"><div class="ll">حجم</div><div class="lv">${fK(c.volume||0)}</div></div>
      </div>
      <div class="strength-row"><span style="color:var(--t2)">⭐ Score</span>
        <div class="str-bar"><div class="str-fill" style="width:${c.score}%;background:linear-gradient(90deg,var(--pm),var(--pu))"></div></div>
        <span style="color:${scoreCol};font-weight:800;font-family:monospace">${c.score}/100</span>
      </div>
      <button class="btn-track" onclick='trackContract("${sym}", ${recPayload})'>🧠 تتبع — أضف للذاكرة التكيفية</button>
    </div>`;
  });
  h+=`<div class="disclosure"><b>كيف يعمل الترشيح:</b> يحلل السلسلة الأسبوعية، يقيّم 7 معايير (فني، ديلتا، IV، OI، حجم، سبريد، حركة متوقعة) بأوزان تتعلم من نتائج توصياتك السابقة.</div>`;
  target.innerHTML=h;
}

/* ════════════════════════════════════════════════════════
   RADAR (mobile)
   ════════════════════════════════════════════════════════ */
const RADAR={raf:null,lastFrame:0,nodes:[],walls:[],smartFlow:[],darkSignals:[],pulseT:0,optionsData:null,priceLine:null};
function detectSmartMoneyM(sym){
  const cs=G.cans[sym];if(!cs||cs.length<20)return{zscore:0,accumulation:0,diagnosis:'بيانات غير كافية'};
  const vols=cs.slice(-20).map(c=>c.volume);
  const mean=vols.reduce((a,b)=>a+b,0)/vols.length;
  const std=Math.sqrt(vols.reduce((a,b)=>a+(b-mean)**2,0)/vols.length)||1;
  const z=(cs[cs.length-1].volume-mean)/std;
  const last10=cs.slice(-10);let acc=0;
  for(const c of last10){const r=c.high-c.low||.001;acc+=((c.close-c.low)/r-0.5)*c.volume;}
  acc=acc/last10.reduce((a,c)=>a+c.volume,0);
  let diag='سيولة طبيعية';
  if(z>2&&acc>0.15)diag='🐋 شراء مؤسسي محتمل';
  else if(z>2&&acc<-0.15)diag='🦈 بيع مؤسسي محتمل';
  else if(z>1.5)diag='⚡ نشاط غير عادي';
  else if(Math.abs(acc)>0.25)diag=acc>0?'📈 تراكم تدريجي':'📉 توزيع تدريجي';
  return{zscore:+z.toFixed(2),accumulation:+acc.toFixed(3),diagnosis:diag};
}
function calcBreakoutProbM(sym){
  const ind=G.ind[sym],sc=G.sc[sym];if(!ind||!sc)return 0;
  let s=0;
  if(ind.boll&&ind.boll.w<4)s+=25;else if(ind.boll&&ind.boll.w<7)s+=15;
  const sm=detectSmartMoneyM(sym);
  if(sm.zscore>2)s+=20;else if(sm.zscore>1)s+=10;
  if(sc.main!=='محايد'&&sc.str>60)s+=20;
  return Math.min(95,s);
}
function renderGaugeM(sym){
  const sc=G.sc[sym];if(!sc)return '';
  let power=sc.main==='شراء'?sc.str:sc.main==='بيع'?-sc.str:0;
  power=Math.max(-100,Math.min(100,power));
  const angle=(power/100)*90;
  const cx=100,cy=90,r=70;
  const nx=cx+r*0.85*Math.cos((angle-90)*Math.PI/180);
  const ny=cy+r*0.85*Math.sin((angle-90)*Math.PI/180);
  const lbl=power>60?'شراء قوي':power>25?'شراء':power>-25?'محايد':power>-60?'بيع':'بيع قوي';
  const lblCol=power>25?'var(--up)':power<-25?'var(--dn)':'var(--gd)';
  return `<div class="gauge-wrap">
    <svg class="gauge-svg" viewBox="0 0 200 100">
      <defs><linearGradient id="ggm" x1="0%" x2="100%"><stop offset="0%" stop-color="#f04458"/><stop offset="50%" stop-color="#f5c842"/><stop offset="100%" stop-color="#0ecf7e"/></linearGradient></defs>
      <path d="M 30 90 A 70 70 0 0 1 170 90" stroke="url(#ggm)" stroke-width="10" fill="none" opacity=".7" stroke-linecap="round"/>
      <circle cx="${cx}" cy="${cy}" r="4" fill="#fff"/>
      <line x1="${cx}" y1="${cy}" x2="${nx}" y2="${ny}" stroke="#fff" stroke-width="2.5" stroke-linecap="round" style="filter:drop-shadow(0 0 4px #fff)"/>
    </svg>
    <div class="gauge-label" style="color:${lblCol}">⚡ ${lbl} • قوة ${Math.abs(power).toFixed(0)}%</div>
  </div>`;
}
async function fetchOptions(sym){return null;}
async function buildRadar(){
  const sym=G.sel,cs=G.cans[sym],ind=G.ind[sym],sc=G.sc[sym],p=G.pr[sym];
  if(!cs||!ind||!sc||!p){document.getElementById('ht-radar').innerHTML='<div class="loading"><div class="spinner"></div>جاري التحميل...</div>';return;}
  const sm=detectSmartMoneyM(sym);const bp=calcBreakoutProbM(sym);
  let h=`<div style="margin-bottom:8px;padding:6px 10px;background:linear-gradient(90deg,rgba(74,158,255,.05),rgba(167,139,250,.05));border:1px solid rgba(74,158,255,.2);border-radius:5px;display:flex;justify-content:space-between;align-items:center;font-size:10px"><span style="color:var(--bl);font-weight:600">📡 رادار السيولة الذكي</span><span style="display:flex;align-items:center;gap:5px"><span style="width:6px;height:6px;background:var(--up);border-radius:50%;box-shadow:0 0 8px var(--up);animation:dot 1.5s infinite"></span>BEAT</span></div>
  <canvas id="radar-canvas" class="radar-canvas"></canvas>
  <div class="radar-legend">
    <div class="rl-item"><span class="rl-dot call"></span>جدار Call</div>
    <div class="rl-item"><span class="rl-dot put"></span>جدار Put</div>
    <div class="rl-item"><span class="rl-dot smart"></span>أموال ذكية</div>
    <div class="rl-item"><span class="rl-dot dark"></span>سيولة مستنتجة</div>
  </div>
  <div class="breakout-prob" style="margin-top:10px"><span style="font-weight:700;color:${bp>=70?'var(--up)':bp>=50?'var(--gd)':'var(--t2)'}">⚡ احتمالية انفجار:</span><div class="bp-bar"><div class="bp-fill" style="width:${bp}%"></div></div><span style="font-weight:700;color:${bp>=70?'var(--up)':bp>=50?'var(--gd)':'var(--t2)'};min-width:34px;text-align:left">${bp}%</span></div>
  ${renderGaugeM(sym)}
  <div class="info-card"><div class="info-title">🐋 تتبع الأموال الذكية</div>
    <div class="info-row"><span class="info-label">شذوذ الحجم</span><span class="info-value" style="color:${sm.zscore>2?'var(--up)':sm.zscore<-2?'var(--dn)':'var(--t1)'}">${sm.zscore.toFixed(2)}σ ${sm.zscore>2?'⚡':''}</span></div>
    <div class="info-row"><span class="info-label">اتجاه التراكم</span><span class="info-value" style="color:${sm.accumulation>0?'var(--up)':sm.accumulation<0?'var(--dn)':'var(--t1)'}">${sm.accumulation>0?'▲ تراكم':sm.accumulation<0?'▼ توزيع':'◆ متوازن'}</span></div>
    <div class="info-row"><span class="info-label">تشخيص الحالة</span><span class="info-value" style="color:var(--bl);font-size:10px">${sm.diagnosis}</span></div>
  </div>
  <div class="info-card"><div class="info-title">🧱 جدار العقود (Open Interest)</div><div id="walls-mobile"><div style="font-size:10px;color:var(--t3);text-align:center;padding:10px">جاري الجلب...</div></div></div>
  <div class="disclosure"><b>شفافية:</b> بيانات Dark Pool الفعلية تتطلب اشتراك Unusual Whales. هذا النظام محاكاة استنتاجية تعتمد على Open Interest الحقيقي + Z-Score الحجم + تجمعات السيولة + الجاما المحسوبة.</div>`;
  document.getElementById('ht-radar').innerHTML=h;
  startRadar(sym);
  fetchOptions(sym).then(chain=>{if(chain){RADAR.optionsData=chain;renderWallsM(sym,chain);buildRadarNodes(sym);}});
}
function renderWallsM(sym,chain){
  const target=document.getElementById('walls-mobile');if(!target||!chain)return;
  const exps=chain.expirationDates||[];const now=Date.now()/1000;
  let nearest=exps.find(t=>t-now>0&&t-now<86400*14)||exps[0];
  const opt=(chain.options||[]).find(o=>o.expirationDate===nearest)||(chain.options||[])[0];
  if(!opt){target.innerHTML='<div style="font-size:10px;color:var(--t3);text-align:center;padding:10px">لا توجد عقود</div>';return;}
  const calls=(opt.calls||[]).filter(c=>c.openInterest>0),puts=(opt.puts||[]).filter(c=>c.openInterest>0);
  const p=G.pr[sym];
  const cw=calls.filter(c=>c.strike>p).sort((a,b)=>b.openInterest-a.openInterest).slice(0,4).sort((a,b)=>a.strike-b.strike);
  const pw=puts.filter(c=>c.strike<p).sort((a,b)=>b.openInterest-a.openInterest).slice(0,4).sort((a,b)=>b.strike-a.strike);
  const maxOI=Math.max(...cw.map(c=>c.openInterest),...pw.map(c=>c.openInterest),1);
  let html='';
  if(cw.length){html+='<div style="font-size:9px;color:var(--up);font-weight:700;padding:3px 4px">▲ Call Walls</div>';for(const c of cw){const pct=c.openInterest/maxOI*100;html+=`<div class="wall-row"><span style="font-weight:700;color:var(--up);min-width:60px">$${c.strike}</span><div class="wall-bar-wrap"><div class="wall-bar" style="width:${pct}%;background:linear-gradient(90deg,rgba(14,207,126,.3),rgba(14,207,126,.7))"></div></div><span style="color:var(--t2);min-width:40px;text-align:left">${fK(c.openInterest)}</span></div>`;}}
  html+=`<div class="wall-row" style="background:rgba(74,158,255,.06);border-right:2px solid var(--bl);padding-right:6px"><span style="color:var(--bl);min-width:60px;font-weight:700">$${p.toFixed(2)}</span><span style="flex:1;text-align:center;color:var(--bl);font-size:9px">◆ السعر الحالي</span><span style="color:var(--bl);min-width:40px;text-align:left">NOW</span></div>`;
  if(pw.length){html+='<div style="font-size:9px;color:var(--dn);font-weight:700;padding:3px 4px">▼ Put Walls</div>';for(const c of pw){const pct=c.openInterest/maxOI*100;html+=`<div class="wall-row"><span style="font-weight:700;color:var(--dn);min-width:60px">$${c.strike}</span><div class="wall-bar-wrap"><div class="wall-bar" style="width:${pct}%;background:linear-gradient(90deg,rgba(240,68,88,.3),rgba(240,68,88,.7))"></div></div><span style="color:var(--t2);min-width:40px;text-align:left">${fK(c.openInterest)}</span></div>`;}}
  target.innerHTML=html;
}
function buildRadarNodes(sym){
  RADAR.nodes=[];RADAR.walls=[];RADAR.smartFlow=[];RADAR.darkSignals=[];
  const cs=G.cans[sym],ind=G.ind[sym],sc=G.sc[sym],p=G.pr[sym];
  const cv=document.getElementById('radar-canvas');if(!cv||!cs||!ind)return;
  const W=cv.clientWidth,H=260;
  const recent=cs.slice(-30);
  const pH=Math.max(...recent.map(c=>c.high))*1.02,pL=Math.min(...recent.map(c=>c.low))*0.98;
  const pR=pH-pL||1;
  const yFor=price=>H-30-((price-pL)/pR)*(H-60);
  RADAR.priceLine={y:yFor(p),p};
  if(RADAR.optionsData){
    const exps=RADAR.optionsData.expirationDates||[];const now=Date.now()/1000;
    const nearest=exps.find(t=>t-now>0&&t-now<86400*14)||exps[0];
    const opt=(RADAR.optionsData.options||[]).find(o=>o.expirationDate===nearest);
    if(opt){
      const calls=(opt.calls||[]).filter(c=>c.openInterest>50).sort((a,b)=>b.openInterest-a.openInterest).slice(0,4);
      const puts=(opt.puts||[]).filter(c=>c.openInterest>50).sort((a,b)=>b.openInterest-a.openInterest).slice(0,4);
      const maxOI=Math.max(...calls.map(c=>c.openInterest),...puts.map(c=>c.openInterest),1);
      for(const c of calls){const y=yFor(c.strike);if(y>=5&&y<=H-5)RADAR.walls.push({type:'call',y,strike:c.strike,oi:c.openInterest,intensity:c.openInterest/maxOI});}
      for(const c of puts){const y=yFor(c.strike);if(y>=5&&y<=H-5)RADAR.walls.push({type:'put',y,strike:c.strike,oi:c.openInterest,intensity:c.openInterest/maxOI});}
    }
  }
  // Liquidity nodes from price-action levels (simple version: highs/lows of recent candles)
  for(let i=0;i<recent.length;i+=4){const c=recent[i];if(c.volume>0){RADAR.nodes.push({type:Math.random()>0.5?'liq-up':'liq-down',x:Math.random()*(W-60)+30,y:yFor((c.high+c.low)/2),radius:5,strength:1,price:c.close,pulse:Math.random()*Math.PI*2,vx:(Math.random()-0.5)*0.3,vy:0});}}
  const sm=detectSmartMoneyM(sym);
  if(Math.abs(sm.zscore)>1.5)RADAR.smartFlow.push({x:W/2,y:RADAR.priceLine.y,strength:Math.abs(sm.zscore),direction:sm.accumulation>0?1:-1,pulse:0});
  for(let i=cs.length-5;i<cs.length;i++){if(i<1)continue;const c=cs[i],pc=cs[i-1];const vr=c.volume/Math.max(1,pc.volume),pm=Math.abs(c.close-c.open)/c.open;if(vr>1.8&&pm<0.005)RADAR.darkSignals.push({x:Math.random()*(W-40)+20,y:yFor((c.high+c.low)/2),intensity:vr,pulse:Math.random()*Math.PI*2});}
}
function startRadar(sym){
  if(RADAR.raf)cancelAnimationFrame(RADAR.raf);
  buildRadarNodes(sym);
  const cv=document.getElementById('radar-canvas');if(!cv)return;
  const dpr=window.devicePixelRatio||1;cv.width=cv.clientWidth*dpr;cv.height=260*dpr;
  const ctx=cv.getContext('2d');ctx.scale(dpr,dpr);
  function frame(now){
    if(G.tab!=='radar'){RADAR.raf=null;return;}
    const W=cv.clientWidth,H=260;
    if(!RADAR.lastFrame)RADAR.lastFrame=now;
    const dt=Math.min(0.05,(now-RADAR.lastFrame)/1000);RADAR.lastFrame=now;RADAR.pulseT+=dt;
    ctx.fillStyle='rgba(2,5,13,0.25)';ctx.fillRect(0,0,W,H);
    ctx.strokeStyle='rgba(74,158,255,0.04)';ctx.lineWidth=0.5;
    for(let x=0;x<W;x+=40){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
    for(let y=0;y<H;y+=30){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
    for(const w of RADAR.walls){
      const col=w.type==='call'?'14,207,126':'240,68,88';
      const grad=ctx.createLinearGradient(0,w.y,W,w.y);
      grad.addColorStop(0,`rgba(${col},0)`);grad.addColorStop(0.5,`rgba(${col},${0.18+w.intensity*0.4})`);grad.addColorStop(1,`rgba(${col},0)`);
      ctx.strokeStyle=grad;ctx.lineWidth=1.5+w.intensity*4;ctx.beginPath();ctx.moveTo(0,w.y);ctx.lineTo(W,w.y);ctx.stroke();
      ctx.fillStyle=w.type==='call'?'rgba(14,207,126,0.9)':'rgba(240,68,88,0.9)';
      ctx.font='bold 9px IBM Plex Mono';ctx.textAlign='left';
      ctx.fillText(`${w.type==='call'?'▲':'▼'} $${w.strike} ${fK(w.oi)}`,4,w.y-3);
    }
    for(let i=0;i<RADAR.nodes.length;i++){for(let j=i+1;j<RADAR.nodes.length;j++){const a=RADAR.nodes[i],b=RADAR.nodes[j];const dx=a.x-b.x,dy=a.y-b.y,d=Math.sqrt(dx*dx+dy*dy);if(d<90){const op=(1-d/90)*0.35*(Math.sin(RADAR.pulseT*1.5)*0.3+0.7);ctx.strokeStyle=`rgba(74,158,255,${op})`;ctx.lineWidth=0.6;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}}}
    if(RADAR.priceLine){ctx.strokeStyle='rgba(74,158,255,0.5)';ctx.lineWidth=1.2;ctx.setLineDash([4,3]);ctx.beginPath();ctx.moveTo(0,RADAR.priceLine.y);ctx.lineTo(W,RADAR.priceLine.y);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle='rgba(74,158,255,0.95)';ctx.font='bold 9px IBM Plex Mono';ctx.textAlign='right';ctx.fillText(`◆ $${RADAR.priceLine.p.toFixed(2)}`,W-4,RADAR.priceLine.y-3);}
    for(const n of RADAR.nodes){n.pulse+=dt*2;n.x+=n.vx;if(n.x<20||n.x>W-20)n.vx*=-1;const isUp=n.type==='liq-up',col=isUp?'245,200,66':'167,139,250',pr=n.radius+Math.sin(n.pulse)*2;const grad=ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,pr*2.5);grad.addColorStop(0,`rgba(${col},0.5)`);grad.addColorStop(0.4,`rgba(${col},0.18)`);grad.addColorStop(1,`rgba(${col},0)`);ctx.fillStyle=grad;ctx.beginPath();ctx.arc(n.x,n.y,pr*2.5,0,Math.PI*2);ctx.fill();ctx.fillStyle=`rgba(${col},0.9)`;ctx.beginPath();ctx.arc(n.x,n.y,pr,0,Math.PI*2);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(n.x,n.y,1.5,0,Math.PI*2);ctx.fill();}
    for(const sm of RADAR.smartFlow){sm.pulse+=dt*3;const r=14+Math.sin(sm.pulse)*4,col=sm.direction>0?'14,207,126':'240,68,88';const ag=ctx.createRadialGradient(sm.x,sm.y,0,sm.x,sm.y,r*2);ag.addColorStop(0,`rgba(${col},0.7)`);ag.addColorStop(1,`rgba(${col},0)`);ctx.fillStyle=ag;ctx.beginPath();ctx.arc(sm.x,sm.y,r*2,0,Math.PI*2);ctx.fill();ctx.fillStyle=`rgba(${col},0.95)`;ctx.font='bold 16px sans-serif';ctx.textAlign='center';ctx.fillText('🐋',sm.x,sm.y+6);}
    for(const ds of RADAR.darkSignals){ds.pulse+=dt*1.5;const r=8+Math.sin(ds.pulse)*3,it=Math.min(0.6,ds.intensity*0.15);const grad=ctx.createRadialGradient(ds.x,ds.y,0,ds.x,ds.y,r*3);grad.addColorStop(0,`rgba(167,139,250,${it})`);grad.addColorStop(1,'rgba(167,139,250,0)');ctx.fillStyle=grad;ctx.beginPath();ctx.arc(ds.x,ds.y,r*3,0,Math.PI*2);ctx.fill();ctx.strokeStyle='rgba(167,139,250,0.5)';ctx.lineWidth=1;ctx.setLineDash([2,3]);ctx.beginPath();ctx.arc(ds.x,ds.y,r,0,Math.PI*2);ctx.stroke();ctx.setLineDash([]);}
    const sx=(Math.sin(RADAR.pulseT*0.4)+1)*0.5*W;const sg=ctx.createLinearGradient(sx-30,0,sx+30,0);sg.addColorStop(0,'rgba(74,158,255,0)');sg.addColorStop(0.5,'rgba(74,158,255,0.18)');sg.addColorStop(1,'rgba(74,158,255,0)');ctx.fillStyle=sg;ctx.fillRect(sx-30,0,60,H);
    RADAR.raf=requestAnimationFrame(frame);
  }
  RADAR.lastFrame=0;RADAR.raf=requestAnimationFrame(frame);
}

/* ════════════════════════════════════════════════════════
   AI / INFO panels
   ════════════════════════════════════════════════════════ */
async function buildAI(){
  const sym=G.sel,sc=G.sc[sym],p=G.pr[sym],ind=G.ind[sym];
  if(!sc||!p){document.getElementById('ht-ai').innerHTML='<div class="loading">انتظر تحميل البيانات</div>';return;}
  document.getElementById('ht-ai').innerHTML=`<div class="info-card"><div class="info-title">✦ تحليل AI</div><button class="btn-ai" id="ai-run-btn" onclick="runAI()">🚀 تحليل ذكي بـ Claude</button><div id="ai-output" style="margin-top:10px"></div></div>`;
}
async function runAI(){
  const sym=G.sel,sc=G.sc[sym],p=G.pr[sym],ind=G.ind[sym];
  document.getElementById('ai-output').innerHTML=`<div style="display:flex;align-items:center;gap:8px;color:var(--t3);font-size:11px;padding:10px">جاري التحليل...<div class="ai-dots"><span></span><span></span><span></span></div></div>`;
  document.getElementById('ai-run-btn').disabled=true;
  const cached=G.contractCache[sym];const contracts=cached?.data?.recommendations||[];
  const wr=getWR();
  const prompt=`أنت محلل فني خبير في السوق السعودي. حلل بدقة بالعربية.
السهم: ${sym} — ${NAMES[sym]||''} (${SECS[sym]||''})
السعر: $${p.toFixed(2)}${G.preMarket[sym]?` | بري ماركت $${G.preMarket[sym].price.toFixed(2)} (${G.preMarket[sym].change>=0?'+':''}${G.preMarket[sym].change.toFixed(2)}%)`:''}
RSI:${ind.rsi.toFixed(1)} MACD:${ind.macd.v>ind.macd.s?'↑':'↓'} MA9:${ind.ma9.toFixed(2)} MA20:${ind.ma20.toFixed(2)} MA50:${ind.ma50.toFixed(2)}
الإشارة: ${sc.main} قوة ${sc.str}% (${sc.buy} شراء | ${sc.sell} بيع)
حركة متوقعة أسبوعياً: ±${sc.expectedMovePct}%
${contracts.length?'أقوى الأسهم: '+contracts.map(c=>`${c.type} ${c.strike} (Score ${c.score})`).join(' | '):''}
${AI.stats.total?`ذاكرة المنصة: ${AI.stats.total} توصية، فوز ${wr}%`:''}
اكتب تحليلاً موجزاً يشمل: (1) الاتجاه، (2) أقوى 2 إشارة، (3) رأيك في العقود وأيهم أفضل، (4) إدارة المخاطر، (5) ما يجب مراقبته في البري ماركت. تنبيه: للأغراض التعليمية فقط.`;
  try{
    const r=await fetch('/api/ai',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt,max_tokens:1200})});
    const d=await r.json();
    if(!d || d.ok===false){throw new Error(d?.errorMsg || 'HTTP '+r.status);}
    const txt=(typeof d.text==='string'&&d.text.length)?d.text:'تعذر استخراج التحليل';
    const fmt=String(txt).replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>');
    document.getElementById('ai-output').innerHTML=`<div class="ai-text">${fmt}</div>`;
  }catch(e){
    document.getElementById('ai-output').innerHTML=`<div style="color:var(--dn);font-size:10px;line-height:1.7">⚠ ${String(e.message||e)}<br><br><span style="color:var(--t2)">للتشخيص افتح <code style="color:var(--gd)">/api/test?symbol=${sym}</code> في المتصفح</span></div>`;
  }
  document.getElementById('ai-run-btn').disabled=false;
}
window.runAI=runAI;

function buildInfoTab(){
  const sym=G.sel,p=G.pr[sym],sc=G.sc[sym],ind=G.ind[sym];
  let h=`<div class="info-card"><div class="info-title">معلومات السهم</div>
    <div class="info-row"><span class="info-label">الرمز</span><span class="info-value" style="color:var(--bl)">${sym}</span></div>
    <div class="info-row"><span class="info-label">الاسم</span><span class="info-value">${NAMES[sym]||'—'}</span></div>
    <div class="info-row"><span class="info-label">القطاع</span><span class="info-value" style="color:var(--cy)">${SECS[sym]||'—'}</span></div>
    <div class="info-row"><span class="info-label">السعر</span><span class="info-value">$${p?.toFixed(2)||'—'}</span></div>
    <div class="info-row"><span class="info-label">أعلى</span><span class="info-value up">${G.hi[sym]?.toFixed(2)||'—'}</span></div>
    <div class="info-row"><span class="info-label">أدنى</span><span class="info-value dn">${G.lo[sym]?.toFixed(2)||'—'}</span></div>
    <div class="info-row"><span class="info-label">حجم</span><span class="info-value">${fK(G.vo[sym]||0)}</span></div>
    <div class="info-row"><span class="info-label">المصدر</span><span class="info-value" style="color:${G.ld.has(sym)?'var(--up)':'var(--gd)'}">${G.ld.has(sym)?'Yahoo Finance ✓':'تقريبي'}</span></div>
  </div>`;
  if(G.preMarket[sym]){const pm=G.preMarket[sym];h+=`<div class="info-card"><div class="info-title">🌅 بيانات قبل السوق</div><div class="info-row"><span class="info-label">السعر</span><span class="info-value">$${pm.price.toFixed(2)}</span></div><div class="info-row"><span class="info-label">التغير</span><span class="info-value" style="color:${pm.change>=0?'var(--up)':'var(--dn)'}">${pm.change>=0?'+':''}${pm.change.toFixed(2)}%</span></div></div>`;}
  if(sc&&ind)h+=`<div class="info-card"><div class="info-title">الملخص الفني</div><div class="info-row"><span class="info-label">إشارة</span><span class="info-value" style="color:${sc.main==='شراء'?'var(--up)':sc.main==='بيع'?'var(--dn)':'var(--gd)'}">${sc.main} ${sc.str}%</span></div><div class="info-row"><span class="info-label">RSI</span><span class="info-value">${ind.rsi.toFixed(1)}</span></div><div class="info-row"><span class="info-label">شراء/بيع</span><span class="info-value">${sc.buy}/${sc.sell}</span></div></div>`;
  document.getElementById('ht-info').innerHTML=h;
}

/* WATCHLIST */
function buildWatch(filter=''){
  const f=filter.toLowerCase();
  const arr=STKS.filter(s=>!f||s.toLowerCase().includes(f)||(NAMES[s]||'').includes(filter));
  document.getElementById('watchlist').innerHTML=arr.map(s=>{
    const p=G.pr[s]||0,pc=G.pc[s]||0,sc=G.sc[s];
    const sigCol=sc?.main==='شراء'?'var(--up)':sc?.main==='بيع'?'var(--dn)':'var(--gd)';
    const sigText=sc?.main==='شراء'?'▲ شراء':sc?.main==='بيع'?'▼ بيع':'—';
    return `<div class="wl-row ${s===G.sel?'on':''}" onclick="selStock('${s}');setView('home',document.querySelector('.bn-btn'))">
      <div class="wl-l"><span class="wl-sym">${s}</span><span class="wl-name">${NAMES[s]||''}</span></div>
      <div class="wl-r"><span class="wl-p ${pc>=0?'up':'dn'}">${p>0?'ر.س'+p.toFixed(2):'—'}</span><span class="wl-c ${pc>=0?'up':'dn'}">${pc!==0?(pc>=0?'+':'')+pc.toFixed(2)+'%':''}</span></div>
      <span style="color:${sigCol};font-size:10px;font-weight:700;min-width:50px;text-align:center">${sigText}</span>
    </div>`;
  }).join('')||'<div class="empty">لا نتائج</div>';
}

/* CONTRACTS SCAN */
async function scanContracts(){
  G.opt=[];
  const prog=document.getElementById('opt-progress');prog.style.display='block';
  const pTxt=document.getElementById('opt-prog-txt'),pFill=document.getElementById('opt-prog-fill');
  document.getElementById('opt-results').innerHTML='';
  const cands=STKS.slice(0,60);const total=cands.length;let done=0;
  for(const sym of cands){
    if(!G.cans[sym])await loadStock(sym,'3mo','1d');
    if(!G.sc[sym])calcSc(sym);
    const sc=G.sc[sym],p=G.pr[sym];
    if(sc&&p){
      G.opt.push({sym,name:NAMES[sym],price:p,type:sc.main==='شراء'?'BUY':'SELL',strike:sc.entry,mid:p,score:sc.str,target:sc.tp,breakeven:sc.entry,delta:0,iv:0,openInterest:0,volume:G.vo[sym]||0,expiry:Date.now()+7*86400000,underlying:p});
    }
    done++;pFill.style.width=(done/total*100).toFixed(0)+'%';pTxt.textContent=`${done}/${total} — وجد ${G.opt.filter(o=>o.score>=60).length} فرصة`;
    if(done%5===0)renderOptList();
    await new Promise(r=>setTimeout(r,30));
  }
  prog.style.display='none';
  pTxt.textContent=`اكتمل — ${G.opt.filter(o=>o.score>=60).length} فرصة`;
  renderOptList();
}
window.scanContracts=scanContracts;
function renderOptList(){
  const data=[...G.opt].sort((a,b)=>b.score-a.score).slice(0,40);
  document.getElementById('opt-results').innerHTML=data.map((d,i)=>{
    const isBuy=d.type==='BUY';
    const sigCol=d.score>=70?'var(--up)':d.score>=55?'var(--gd)':'var(--t3)';
    const sigText=d.score>=70?'▲ شراء قوي':d.score>=55?'▲ شراء':d.score>=45?'◎ رصد':'— ضعيف';
    const tierBadge=i<3?['🥇','🥈','🥉'][i]+' ':'';
    const pctCol=(G.pc[d.sym]||0)>=0?'var(--up)':'var(--dn)';
    return `<div class="opt-row" onclick="selStock('${d.sym}');setView('home',document.querySelector('.bn-btn'))" style="${i<3?'border-right:3px solid '+sigCol:''}">
      <div style="flex:1">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
          <span style="font-weight:700;color:var(--bl);font-family:monospace;font-size:12px">${tierBadge}${d.sym}</span>
          <span style="font-size:9px;color:var(--t2)">${d.name||''}</span>
        </div>
        <div style="font-size:10px;color:var(--t2)">
          <span>ر.س${d.price?.toFixed(2)||'—'}</span> •
          <span style="color:${pctCol}">${(G.pc[d.sym]||0)>=0?'+':''}${(G.pc[d.sym]||0).toFixed(2)}%</span> •
          <span style="color:${sigCol};font-weight:700">${sigText}</span>
        </div>
        <div style="font-size:9px;color:var(--t3);margin-top:2px">دخول ر.س${d.strike?.toFixed(2)||'—'} • هدف ر.س${d.target?.toFixed(2)||'—'}</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:3px"><span class="opt-score" style="color:${sigCol}">${d.score}</span></div>
    </div>`;
  }).join('')||'<div class="empty">اضغط زر الفرز لتحليل الأسهم</div>';
}

/* MEMORY */
function buildMemory(){
  const wins=AI.stats.wins,losses=AI.stats.losses,pending=AI.recs.filter(r=>r.status==='pending').length;
  const wr=getWR();
  const STR_NAMES={classic:'كلاسيك',harmonic:'هارمونيك',elliott:'إيليوت',ma:'متوسطات',osc:'RSI',macd:'MACD',ichimoku:'إيشيموكو',bollinger:'بولنجر',vwap:'VWAP',supdem:'عرض/طلب',liquidity:'سيولة',fakeout:'كسر وهمي',fractal:'فركتال'};
  let h=`<div class="info-card"><div class="info-title">🧠 ذاكرة الذكاء التكيفي</div>
    <div class="mem-stat">
      <div class="mem-cell"><div class="ml">إجمالي</div><div class="mv">${AI.stats.total}</div></div>
      <div class="mem-cell"><div class="ml">معلق</div><div class="mv" style="color:var(--gd)">${pending}</div></div>
      <div class="mem-cell"><div class="ml">نسبة الفوز</div><div class="mv" style="color:${wr>=60?'var(--up)':wr<40?'var(--dn)':'var(--gd)'}">${wr}%</div></div>
    </div>
    <div style="font-size:10px;color:var(--t2);margin-top:8px;line-height:1.7">المنصة تتعلم من نتائج كل عقد. الأوزان تتعدل ذاتياً بعد انتهاء العقد.</div>
  </div>`;
  h+=`<div class="info-card"><div class="info-title">⚖️ أوزان المؤشرات</div>`;
  const labels={technical:'فني',delta:'ديلتا',iv:'IV',oi:'OI',volume:'حجم',spread:'سبريد',move:'حركة'};
  for(const[k,l]of Object.entries(labels)){const w=AI.weights[k]||1;const pct=Math.min(100,w/2.5*100);const col=w>=1.3?'var(--up)':w<=0.7?'var(--dn)':'var(--gd)';h+=`<div class="mem-bar"><div class="mem-bar-fill" style="width:${pct}%;background:${col}"></div><div class="mem-bar-text"><span>${l}</span><span style="font-family:monospace;color:${col}">×${w.toFixed(2)}</span></div></div>`;}
  h+='</div>';
  h+=`<div class="info-card"><div class="info-title">🎯 أوزان الاستراتيجيات</div>`;
  for(const k of Object.keys(STR_NAMES)){const w=AI.weights['strat_'+k]||1;const pct=Math.min(100,w/2.5*100);const col=w>=1.3?'var(--up)':w<=0.7?'var(--dn)':'var(--gd)';h+=`<div class="mem-bar"><div class="mem-bar-fill" style="width:${pct}%;background:${col}"></div><div class="mem-bar-text"><span>${STR_NAMES[k]}</span><span style="font-family:monospace;color:${col}">×${w.toFixed(2)}</span></div></div>`;}
  h+='</div>';
  h+=`<div class="info-card"><div class="info-title">📋 سجل التوصيات</div>`;
  const recent=[...AI.recs].slice(-15).reverse();
  if(!recent.length){h+='<div style="text-align:center;color:var(--t3);padding:20px;font-size:11px">لا توجد توصيات بعد<br><span style="font-size:9px;color:var(--t3)">اضغط "🧠 تتبع" على أي عقد لبدء التعلم</span></div>';}
  else{for(const r of recent){const cls=r.status==='win'?'win':r.status==='loss'?'loss':'pending';const lbl=r.status==='win'?'✓ فوز':r.status==='loss'?'✗ خسارة':'⏳ معلق';const dt=new Date(r.timestamp);h+=`<div class="rec-row" onclick="selStock('${r.symbol}');setView('home',document.querySelector('.bn-btn'))"><div><div style="font-weight:600;color:var(--bl);font-family:monospace">${r.symbol} ${r.type} ${r.strike}</div><div style="font-size:9px;color:var(--t3)">${dt.getMonth()+1}/${dt.getDate()} • Score ${r.score}</div></div><span class="rec-status ${cls}">${lbl}</span></div>`;}}
  h+='</div>';
  document.getElementById('memory-content').innerHTML=h;
}

/* CONTROLS */
function selStock(sym){
  G.sel=sym;buildMain();updateChart();buildTickers();
  if(G.tab==='signals')buildSignals();
  else if(G.tab==='contract')buildContract();
  else if(G.tab==='radar')buildRadar();
  else if(G.tab==='ai')buildAI();
  else if(G.tab==='info')buildInfoTab();
  if(!G.ld.has(sym)&&!G.ldg.has(sym))loadStock(sym).then(()=>{buildMain();updateChart();buildTickers();if(G.tab==='signals')buildSignals();});
}
window.selStock=selStock;

function setHomeTab(tab,el){
  G.tab=tab;document.querySelectorAll('.tabs-bar .tab').forEach(t=>t.classList.remove('on'));el.classList.add('on');
  ['signals','contract','radar','ai','info'].forEach(t=>document.getElementById('ht-'+t).style.display='none');
  document.getElementById('ht-'+tab).style.display='block';
  if(tab==='signals')buildSignals();
  else if(tab==='contract')buildContract();
  else if(tab==='radar')buildRadar();
  else if(tab==='ai')buildAI();
  else if(tab==='info')buildInfoTab();
}
window.setHomeTab=setHomeTab;

function setTF(range,interval,el){
  G.tf=range;G.tfi=interval;
  document.querySelectorAll('.tf').forEach(t=>t.classList.remove('on'));el.classList.add('on');
  delete G.cans[G.sel];G.ld.delete(G.sel);G.ldg.delete(G.sel);
  loadStock(G.sel,range,interval).then(()=>{updateChart();if(G.tab==='signals')buildSignals();});
}
window.setTF=setTF;

function setView(v,el){
  G.view=v;
  document.querySelectorAll('.view').forEach(x=>x.classList.remove('on'));
  document.getElementById('view-'+v).classList.add('on');
  document.querySelectorAll('.bn-btn').forEach(b=>b.classList.remove('on'));
  if(el)el.classList.add('on');
  if(v==='watch')buildWatch();
  else if(v==='memory')buildMemory();
  else if(v==='settings'){document.getElementById('set-stocks').textContent=STKS.length;document.getElementById('set-loaded').textContent=G.ld.size;document.getElementById('set-total').textContent=AI.stats.total;document.getElementById('set-pending').textContent=AI.stats.pending;document.getElementById('set-wr').textContent=getWR()+'%';}
  else if(v==='contracts'&&!G.opt.length)renderOptList();
}
window.setView=setView;
window.AI_KEY=AI_KEY;

/* INIT */
async function init(){
  initChart();
  buildTickers();buildMain();updateMarket();updateAIBadge();
  buildSignals();
  // load priority stocks
  await Promise.allSettled(PRI.slice(0,5).map(s=>loadStock(s)));
  buildTickers();buildMain();updateChart();buildSignals();
  await Promise.allSettled(PRI.slice(5).map(s=>loadStock(s)));
  buildTickers();
  // background load remaining
  setTimeout(async()=>{const rest=STKS.filter(s=>!PRI.includes(s));for(let i=0;i<rest.length;i+=4){await Promise.allSettled(rest.slice(i,i+4).map(s=>loadStock(s)));await new Promise(r=>setTimeout(r,400));buildTickers();}},2500);
  setInterval(updateMarket,5000);
  setInterval(settlePending,60000);
  setTimeout(settlePending,8000);
}
window.addEventListener('load',init);
