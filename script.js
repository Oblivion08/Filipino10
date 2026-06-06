const TEACHER_PASSWORD = "Binibini2026";

const gameState = {
    unlockedLessons: ["kaligiran"],
    unlockedTerms: ["term1"]
};

const characters = [
  {name:"Andres", avatar:"👨‍🎓", role:"Apprentice Scholar"},
  {name:"Maria", avatar:"👩‍🎓", role:"Research Explorer"},
  {name:"Basilio", avatar:"👨‍⚕️", role:"Future Doctor"},
  {name:"Isagani", avatar:"🧑‍🎨", role:"Poet Warrior"},
  {name:"Juli", avatar:"👩‍🌾", role:"Courage Keeper"},
  {name:"Leonora", avatar:"👸", role:"Guardian of Knowledge"}
];

const npcs = {
  simoun:{name:"Simoun",avatar:"🧔‍♂️",line:"Ang kaalaman ay kapangyarihan. Suriin ang katotohanan."},
  basilio:{name:"Basilio",avatar:"👨‍⚕️",line:"Ang tunay na iskolar ay marunong magsuri at umunawa."},
  isagani:{name:"Isagani",avatar:"🧑‍🎨",line:"Sa bawat akda, may damdamin, simbolo, at paninindigan."},
  propesor:{name:"Propesor Saliksik",avatar:"👩‍🏫",line:"Sa pananaliksik, mahalaga ang katotohanan at kredibilidad."},
  archivist:{name:"Archivist",avatar:"📚",line:"Hanapin ang mapagkakatiwalaang sanggunian."}
};

const topics = [
{
  id:"kaligiran",
  term:"term1",
  icon:"📜",
  npc:"simoun",
  title:"Kaligirang Pangkasaysayan",
  game:"Timeline Builder",
  type:"timeline",
  intro:"Ayusin ang mga pangyayari ayon sa tamang daloy ng kasaysayan.",
  items:[
    "Pagbitay sa GOMBURZA",
    "Pagkakasulat ng Noli Me Tangere",
    "Pagkakasulat ng El Filibusterismo",
    "Paglalantad ng suliraning panlipunan sa nobela",
    "Paglaganap ng diwang makabayan"
  ]
},
{id:"gomburza",term:"term1",icon:"⚔️",npc:"simoun",title:"GOMBURZA",game:"Memory Match",type:"match",intro:"I-match ang pangalan sa tamang paglalarawan.",pairs:[["Gomez","Isa sa tatlong paring martir"],["Burgos","Paring martir na simbolo ng katarungan"],["Zamora","Kabilang sa GOMBURZA"],["GOMBURZA","Simbolo ng pang-aabuso sa panahon ng Kastila"],["1872","Taon ng pagbitay sa tatlong pari"]]},
{id:"tauhan",term:"term1",icon:"👥",npc:"basilio",title:"Mga Tauhan",game:"Who Am I?",type:"whoami",intro:"Basahin ang clue at hulaan ang tauhan.",questions:[{clue:"Ako ang mayamang mag-aalahas na dating si Crisostomo Ibarra.",answer:"Simoun"},{clue:"Ako ay mag-aaral ng medisina at dating sakristan.",answer:"Basilio"},{clue:"Ako ay makatang kasintahan ni Paulita Gomez.",answer:"Isagani"},{clue:"Ako ay ama ni Juli at naging biktima ng pang-aapi.",answer:"Kabesang Tales"},{clue:"Ako ang kasintahan ni Basilio.",answer:"Juli"}]},
{id:"noli",term:"term1",icon:"🔁",npc:"basilio",title:"Pagbabalik-tanaw sa Noli",game:"Recall Quiz",type:"quiz",intro:"Iugnay ang mahahalagang pangyayari sa Noli sa El Fili.",questions:[{q:"Sino ang dating katauhan ni Simoun?",choices:["Crisostomo Ibarra","Elias","Basilio"],answer:0},{q:"Bakit mahalaga ang Noli sa El Fili?",choices:["Nagbibigay ito ng pinagmulan ng mga pangyayari","Wala itong kaugnayan","Ito ay awit"],answer:0},{q:"Anong damdamin ang nag-udyok kay Simoun?",choices:["Paghihiganti","Katuwaan","Paglalakbay"],answer:0},{q:"Sino ang dating bata na nakaligtas mula sa trahedya?",choices:["Basilio","Padre Salvi","Ben Zayb"],answer:0},{q:"Ano ang mahalagang koneksyon ng dalawang nobela?",choices:["Pagsusuri sa lipunang kolonyal","Paglalaro ng tauhan","Paglalakbay sa dagat lamang"],answer:0}]},
{id:"bapor",term:"term1",icon:"🚢",npc:"simoun",title:"Bapor Tabo",game:"Maze Choice",type:"maze",intro:"Piliin ang tamang daan palabas ng Bapor Tabo.",questions:[{q:"Ano ang sinisimbolo ng Bapor Tabo?",choices:["Mabagal na sistema","Mabilis na progreso","Masayang pista"],answer:0},{q:"Ano ang ipinapakita ng mga pasahero?",choices:["Iba’t ibang antas ng lipunan","Mga hayop","Mga bata lamang"],answer:0},{q:"Bakit mahalagang simbolo ang barko?",choices:["Larawan ito ng lipunang mabagal umunlad","Pang-aliw lang ito","Walang kahulugan"],answer:0},{q:"Anong uri ng tekstong biswal ang maaaring suriin dito?",choices:["Imahen at espasyo","Tugma","Sukat"],answer:0},{q:"Ano ang kailangan sa pagsusuri ng simbolo?",choices:["Kritikal na pag-unawa","Panghuhula","Pagkopya"],answer:0}]},
{id:"kabanata1",term:"term1",icon:"📚",npc:"basilio",title:"Kabanata 1–10",game:"Quiz Battle",type:"quiz",intro:"Sagutin ang mahahalagang tanong sa unang bahagi.",questions:[{q:"Sino ang makapangyarihang tauhan na nagbalik?",choices:["Simoun","Don Rafael","Elias"],answer:0},{q:"Ano ang mahalagang ginagawa sa kabanata?",choices:["Pagsusuri ng pangyayari","Pagbilang ng pahina","Pagkopya lang"],answer:0},{q:"Ano ang mahalagang simbolo sa unang kabanata?",choices:["Bapor Tabo","Gubat","Paaralan"],answer:0},{q:"Ano ang pangunahing suliraning makikita sa nobela?",choices:["Kawalan ng katarungan","Kasiyahan lamang","Paligsahan"],answer:0},{q:"Bakit bumalik si Simoun?",choices:["May layuning maghiganti","Mamasyal lamang","Magturo"],answer:0}]},
{id:"kabanata11",term:"term1",icon:"🔤",npc:"isagani",title:"Kabanata 11–18",game:"Jumbled Words",type:"jumbled",intro:"Ayusin ang ginulong salita.",words:["BASILIO","ISAGANI","SIMOUN","JULI","PAULITA"]},
{id:"kabanata19",term:"term1",icon:"🕵️",npc:"simoun",title:"Kabanata 19–25",game:"Case File Challenge",type:"quiz",intro:"Suriin ang mga pangyayari at tukuyin ang tamang sagot.",questions:[{q:"Ano ang pangunahing suliraning ipinakita sa bahaging ito?",choices:["Pang-aabuso ng kapangyarihan","Paligsahan sa paaralan","Paglalakbay sa ibang bansa"],answer:0},{q:"Anong katangian ni Simoun ang lumitaw?",choices:["Pagiging mapaghiganti","Pagiging komedyante","Pagiging mahiyain"],answer:0},{q:"Ano ang layunin ni Simoun sa kanyang mga plano?",choices:["Magpasiklab ng pagbabago sa lipunan","Magtayo ng paaralan","Maging artista"],answer:0},{q:"Ano ang ipinapakita ng mga pangyayari tungkol sa lipunan?",choices:["Maraming katiwalian at kawalan ng katarungan","Perpektong pamahalaan","Walang suliranin"],answer:0},{q:"Ano ang mahalagang aral sa kabanatang ito?",choices:["Dapat suriin ang mga suliraning panlipunan","Huwag makialam sa lipunan","Laging sumunod kahit mali"],answer:0}]},
{id:"kabanata26",term:"term1",icon:"💬",npc:"isagani",title:"Kabanata 26–32",game:"Dialogue Challenge",type:"dialogue",intro:"Piliin kung sinong tauhan ang bagay sa pahayag.",questions:[{line:"Ang pag-ibig sa bayan ay dapat may pananagutan.",choices:["Isagani","Padre Camorra","Don Custodio"],answer:0},{line:"Ang kapangyarihan ay ginagamit upang kontrolin ang tao.",choices:["Simoun","Juli","Paulita"],answer:0},{line:"Ang edukasyon ay mahalaga sa pag-unlad.",choices:["Basilio","Padre Salvi","Donya Victorina"],answer:0},{line:"Ako ay biktima ng lipunang mapang-api.",choices:["Juli","Paulita","Don Custodio"],answer:0},{line:"Ang kabataan ay may papel sa pagbabago.",choices:["Isagani","Padre Camorra","Ben Zayb"],answer:0}]},
{id:"kabanata33",term:"term1",icon:"👹",npc:"simoun",title:"Kabanata 33–39",game:"Boss Battle",type:"quiz",intro:"Huling hamon sa El Filibusterismo.",questions:[{q:"Ano ang isa sa pangunahing diwa ng El Filibusterismo?",choices:["Pagkamulat sa sakit ng lipunan","Paglimot sa bayan","Pagsuko sa pang-aapi"],answer:0},{q:"Bakit mahalagang suriin ang konteksto ng panahon?",choices:["Para maunawaan ang mensahe","Para humaba ang sagot","Para hindi magbasa"],answer:0},{q:"Ano ang ipinakikita ng wakas?",choices:["Pagkabigo ng marahas na paghihiganti","Tagumpay ng kasakiman","Paglimot sa bayan"],answer:0},{q:"Ano ang mahalagang aral?",choices:["Ang pagbabago ay dapat may malasakit at katarungan","Maghiganti agad","Manahimik na lang"],answer:0},{q:"Sino ang sentrong tauhan sa huling plano?",choices:["Simoun","Basilio","Isagani"],answer:0}]},

{id:"tula",term:"term2",icon:"📝",npc:"isagani",title:"Tula",game:"Talinghaga Hunt",type:"quiz",intro:"Tukuyin ang elemento ng tula.",questions:[{q:"Alin ang talinghaga? 'Ang kabataan ay pag-asa ng bayan.'",choices:["kabataan","pag-asa ng bayan","ang"],answer:1},{q:"Ano ang sukat sa tula?",choices:["Bilang ng pantig","Bilang ng tauhan","Lugar ng kuwento"],answer:0},{q:"Ano ang tugma?",choices:["Pagkakatulad ng tunog sa dulo ng taludtod","Paksa ng nobela","Pamagat ng akda"],answer:0},{q:"Ano ang persona?",choices:["Tinig na nagsasalita sa tula","Mambabasa","Manunulat lamang"],answer:0},{q:"Ano ang larawang-diwa?",choices:["Imaheng nabubuo sa isip","Bilang ng salita","Pamagat"],answer:0}]},
{id:"tuluyan",term:"term2",icon:"🎭",npc:"isagani",title:"Tuluyan",game:"Story Detective",type:"quiz",intro:"Tukuyin ang elementong pampanitikan.",questions:[{q:"Si Ana ay pangunahing gumaganap sa kuwento. Anong elemento ito?",choices:["Tauhan","Tagpuan","Banghay"],answer:0},{q:"Naganap ang kuwento sa lumang paaralan. Anong elemento ito?",choices:["Tunggalian","Tagpuan","Tema"],answer:1},{q:"Ang pagkakasunod-sunod ng pangyayari ay?",choices:["Banghay","Tauhan","Simbolo"],answer:0},{q:"Ang labanan ng tauhan sa sarili o lipunan ay?",choices:["Tunggalian","Talinghaga","Sukat"],answer:0},{q:"Ang pangunahing mensahe ng kuwento ay?",choices:["Tema","Tagpuan","Pamagat"],answer:0}]},
{id:"lingguwistika",term:"term2",icon:"🗣️",npc:"isagani",title:"Elementong Panlingguwistika",game:"Language Detective",type:"quiz",intro:"Suriin ang bisa ng salita, pahiwatig, idyoma, at estilo.",questions:[{q:"Ano ang pahiwatig?",choices:["Di tuwirang kahulugan","Eksaktong bilang","Pamagat"],answer:0},{q:"Ano ang idyomatikong pahayag?",choices:["Pahayag na may di-literal na kahulugan","Simpleng petsa","Pangalan"],answer:0},{q:"Bakit mahalaga ang tono?",choices:["Nagpapakita ng damdamin ng teksto","Pampahaba lang","Pangkulay"],answer:0},{q:"Ano ang estilo?",choices:["Paraan ng pagsulat ng may-akda","Lugar ng kuwento","Tauhan"],answer:0},{q:"Ano ang bisa ng salita?",choices:["Epekto ng salita sa kahulugan at damdamin","Bilang ng letra","Uri ng papel"],answer:0}]},
{id:"pananaliksik2",term:"term2",icon:"📚",npc:"propesor",title:"Panimula sa Pananaliksik",game:"Research Basics",type:"quiz",intro:"Unawain ang kahulugan, mananaliksik, at etika.",questions:[{q:"Ano ang pananaliksik?",choices:["Sistematikong pangangalap at pagsusuri ng impormasyon","Panghuhula","Pagkopya"],answer:0},{q:"Ano ang tawag sa taong nagsasagawa ng pag-aaral?",choices:["Mananaliksik","Tauhan","Persona"],answer:0},{q:"Ano ang plagiarism?",choices:["Pangongopya nang walang pagkilala","Pagsusuri","Pagbabasa"],answer:0},{q:"Bakit mahalaga ang etika?",choices:["Para maging tapat at responsable","Para mabilis matapos","Para maraming kulay"],answer:0},{q:"Ano ang dapat gawin sa sanggunian?",choices:["Kilalanin ito nang wasto","Itago ito","Burahin ito"],answer:0}]},
{id:"biswal2",term:"term2",icon:"🖼️",npc:"isagani",title:"Tekstong Biswal",game:"Image Analysis",type:"quiz",intro:"Suriin ang laki, espasyo, kulay, linya, anyo, at imahen.",questions:[{q:"Kapag madilim ang kulay ng larawan, anong damdamin ang maaaring ipahiwatig?",choices:["Lungkot o panganib","Laging saya","Walang kahulugan"],answer:0},{q:"Ano ang sinusuri sa tekstong biswal?",choices:["Laki, espasyo, kulay, linya, anyo","Pamagat lang","Bilang ng salita"],answer:0},{q:"Ano ang maaaring ipahiwatig ng pulang kulay?",choices:["Panganib o matinding damdamin","Walang epekto","Tahimik lamang"],answer:0},{q:"Ano ang gamit ng espasyo?",choices:["Magbigay-diin sa mahalagang bahagi","Pampahaba lang","Pangkulay"],answer:0},{q:"Bakit mahalagang suriin ang imahen?",choices:["Dahil may mensahe itong ipinapakita","Dahil maganda lang","Walang dahilan"],answer:0}]},
{id:"sarbey",term:"term2",icon:"📊",npc:"propesor",title:"Sarbey at Graph",game:"Graph Builder",type:"quiz",intro:"Piliin ang tamang graph para sa datos.",questions:[{q:"Pinakamainam para ipakita ang bilang ng pumili sa bawat opsyon?",choices:["Bar graph","Tula","Sanaysay"],answer:0},{q:"Pinakamainam para ipakita ang porsyento ng kabuuan?",choices:["Pie chart","Dula","Alamat"],answer:0},{q:"Ano ang unang hakbang sa sarbey?",choices:["Pumili ng paksa","Gumawa agad ng graph","Manghula"],answer:0},{q:"Ano ang tawag sa mga sagot na nakalap?",choices:["Datos","Tauhan","Tugma"],answer:0},{q:"Bakit ginagamit ang graph?",choices:["Para madaling maunawaan ang datos","Para gumanda lang","Para humaba ang papel"],answer:0}]},

{id:"komunidad",term:"term3",icon:"🏫",npc:"propesor",title:"Kritikal na Pagtingin sa Komunidad",game:"Community Lens",type:"quiz",intro:"Tukuyin ang impormasyon, mensahe, at detalye sa komunidad.",questions:[{q:"Ano ang halimbawa ng komunidad?",choices:["Paaralan o barangay","Tauhan sa nobela lamang","Sukat ng tula"],answer:0},{q:"Bakit mahalaga ang detalye?",choices:["Batayan ito ng pagsusuri","Pampahaba lang","Palamuti"],answer:0},{q:"Ano ang dapat gawin sa impormasyon?",choices:["Suriin kung mahalaga at totoo","Paniwalaan agad","Itapon"],answer:0},{q:"Ano ang kritikal na pagtingin?",choices:["Masusing pagsusuri","Panghuhula","Pagkopya"],answer:0},{q:"Ano ang layunin ng pagsusuri sa komunidad?",choices:["Matukoy ang isyu at posibleng solusyon","Mangalap ng tsismis","Maglaro lang"],answer:0}]},
{id:"sanggunian",term:"term3",icon:"🔎",npc:"archivist",title:"Mapagkakatiwalaang Sanggunian",game:"Source Hunter",type:"quiz",intro:"Suriin ang kredibilidad ng sanggunian at may-akda.",questions:[{q:"Ano ang dapat suriin sa may-akda?",choices:["Kredibilidad","Kulay ng damit","Haba ng pangalan"],answer:0},{q:"Alin ang mas mapagkakatiwalaan?",choices:["Opisyal na ulat","Random post na walang source","Chismis"],answer:0},{q:"Ano ang pangunahing sanggunian?",choices:["Orihinal na datos o dokumento","Buod ng iba","Opinyon"],answer:0},{q:"Ano ang pangalawang sanggunian?",choices:["Pagsusuri o paliwanag mula sa iba","Orihinal na interview","Sariling larawan"],answer:0},{q:"Bakit mahalaga ang terminolohiya?",choices:["Para malinaw at angkop ang pananaliksik","Para mahaba ang salita","Para mahirap basahin"],answer:0}]},
{id:"factopinion",term:"term3",icon:"📰",npc:"archivist",title:"Katotohanan at Opinyon",game:"Truth Detector",type:"quiz",intro:"Alamin kung fact o opinion.",questions:[{q:"Ang paaralan ay may 500 mag-aaral ayon sa opisyal na tala.",choices:["Fact","Opinion"],answer:0},{q:"Pinakamaganda ang aming paaralan.",choices:["Fact","Opinion"],answer:1},{q:"Ayon sa survey, 80% ang gumagamit ng internet araw-araw.",choices:["Fact","Opinion"],answer:0},{q:"Mas masaya ang online class kaysa face-to-face.",choices:["Fact","Opinion"],answer:1},{q:"Ang pananaliksik ay nangangailangan ng mapagkakatiwalaang sanggunian.",choices:["Fact","Opinion"],answer:0}]},
{id:"abstract",term:"term3",icon:"📖",npc:"propesor",title:"Abstrak ng Pananaliksik",game:"Abstract Puzzle",type:"quiz",intro:"Kilalanin ang layunin, pamamaraan, resulta, at kongklusyon.",questions:[{q:"Bahagi na nagsasaad kung bakit ginawa ang pag-aaral.",choices:["Layunin","Resulta","Kongklusyon"],answer:0},{q:"Bahagi na nagpapakita ng natuklasan.",choices:["Pamamaraan","Resulta","Sanggunian"],answer:1},{q:"Bahagi na nagsasabi kung paano isinagawa ang pag-aaral.",choices:["Pamamaraan","Pamagat","Tauhan"],answer:0},{q:"Bahagi na naglalagom ng kahulugan ng natuklasan.",choices:["Kongklusyon","Tagpuan","Tugma"],answer:0},{q:"Ano ang abstrak?",choices:["Maikling buod ng pananaliksik","Buong nobela","Listahan ng tauhan"],answer:0}]},
{id:"framework",term:"term3",icon:"🧠",npc:"propesor",title:"Konseptuwal na Balangkas",game:"Flowchart Builder",type:"timeline",intro:"Ayusin ang simpleng daloy ng pananaliksik.",items:["Paksa","Suliranin","Pangangalap ng Datos","Pagsusuri ng Datos","Kongklusyon"]},
{id:"poster",term:"term3",icon:"🎨",npc:"propesor",title:"Poster Presentation",game:"Poster Designer",type:"poster",intro:"Buuin ang simpleng poster presentation ng panukalang pananaliksik.",questions:[{q:"Ano ang dapat makita sa research poster?",choices:["Pamagat, layunin, pamamaraan, bunga","Tauhan lang","Kulay lang"],answer:0},{q:"Ano ang dapat malinaw sa pamagat?",choices:["Paksa ng pag-aaral","Pangalan ng artista","Bilang ng larawan"],answer:0},{q:"Ano ang layunin?",choices:["Sinasagot kung bakit ginagawa ang pag-aaral","Dekorasyon","Petsa lang"],answer:0},{q:"Bakit kailangan ang maayos na disenyo?",choices:["Para madaling maunawaan ang impormasyon","Para punuin lang ang papel","Para walang laman"],answer:0},{q:"Ano ang mahalaga sa presentation?",choices:["Malinaw, organisado, at etikal","Mahaba lang","Maraming kulay lang"],answer:0}]}
];

const storyLines = [
  {speaker:"Simoun",avatar:"🧔‍♂️",text:"Isang lumang relikya ang muling nagising. Piliin ang iyong landas at tuklasin ang pamana ng katotohanan."},
  {speaker:"Basilio",avatar:"👨‍⚕️",text:"Sa bawat aralin, may hamon. Sagutin ito upang mabuksan ang mas malalim na pag-unawa."},
  {speaker:"Isagani",avatar:"🧑‍🎨",text:"Mula El Filibusterismo hanggang pananaliksik, ikaw ang magiging tagapagdala ng kaalaman."},
  {speaker:"Propesor Saliksik",avatar:"👩‍🏫",text:"Sa dulo ng paglalakbay, gamitin ang katotohanan upang makabuo ng makabuluhang pananaliksik."}
];

let player = JSON.parse(localStorage.getItem("ps_player")) || null;
let progress = JSON.parse(localStorage.getItem("ps_progress")) || {};
let scores = JSON.parse(localStorage.getItem("ps_scores")) || [];
let awards = JSON.parse(localStorage.getItem("ps_awards")) || [];

const savedState = JSON.parse(localStorage.getItem("ps_gameState"));
if(savedState){
  gameState.unlockedLessons = savedState.unlockedLessons || ["kaligiran"];
  gameState.unlockedTerms = savedState.unlockedTerms || ["term1"];
}
let currentTerm = "term1";
let currentTopic = null;
let qIndex = 0, score = 0, tempOrder = [], selectedPair = [];
let storyIndex = 0, musicOn = false;

function $(id){return document.getElementById(id)}
function save(){
  localStorage.setItem("ps_player", JSON.stringify(player));
  localStorage.setItem("ps_progress", JSON.stringify(progress));
  localStorage.setItem("ps_scores", JSON.stringify(scores));
  localStorage.setItem("ps_awards", JSON.stringify(awards));
  localStorage.setItem("ps_gameState", JSON.stringify(gameState));
}
function playSound(id){const s=$(id); if(!s) return; s.currentTime=0; s.volume=.7; s.play().catch(()=>{})}
function showScreen(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")); $(id).classList.add("active"); updateHUD()}
function enterStudent(){
  playSound("clickSound");
  player = JSON.parse(localStorage.getItem("ps_player")) || null;

  if(player){
    showScreen("home");
  }else{
    showScreen("characterSelect");
  }
}
function showTeacherLogin(){ $("teacherLogin").classList.remove("hidden") }
function checkTeacherPassword(){ if($("teacherPassword").value===TEACHER_PASSWORD){showScreen("teacherDashboard"); updateTeacherOutput("Teacher mode unlocked.")} else {$("passwordMsg").textContent="Maling password."; $("passwordMsg").style.color="#ff7676"}}
function renderCharacters(){ $("characterGrid").innerHTML = characters.map(c=>`<button class="character-card" onclick="selectCharacter('${c.name}','${c.avatar}','${c.role}')"><span>${c.avatar}</span><b>${c.name}</b><small>${c.role}</small></button>`).join("")}
function selectCharacter(name,avatar,role){player={name,avatar,role,level:1,xp:0}; save(); unlockAward("Unang Hakbang ng Iskolar"); showScreen("home")}
function updateHUD(){ if(!player) return; $("playerAvatar").textContent=player.avatar; $("playerName").textContent=player.name; $("playerRole").textContent=player.role; $("playerLevel").textContent=player.level; $("playerXP").textContent=player.xp; $("xpFill").style.width=player.xp+"%"; $("doneCount").textContent=Object.keys(progress).length; $("totalCount").textContent=topics.length; $("awardCount").textContent=awards.length}
function toggleMusic(){const m=$("bgMusic"); if(!m) return; if(m.paused){m.volume=.35;m.play().then(()=>{musicOn=true;$("musicText").textContent="ON"}).catch(()=>alert("Ilagay ang elfili.mp3 sa assets folder."))}else{m.pause();musicOn=false;$("musicText").textContent="MUSIC"}}
function nextStory(){storyIndex=(storyIndex+1)%storyLines.length; const s=storyLines[storyIndex]; $("storySpeaker").textContent=s.speaker; $("storyAvatar").textContent=s.avatar; $("storyLine").textContent=s.text}
function termName(t){return t==="term1"?"TERM 1 — El Filibusterismo":t==="term2"?"TERM 2 — Makabagong Akda":"TERM 3 — Pananaliksik"}
function openTerm(term){currentTerm=term; renderLessons(); showScreen("lessonMenu")}
function showCurrentTerm(){renderLessons(); showScreen("lessonMenu")}
function isUnlocked(topicId){
  if(localStorage.getItem("ps_unlockAll") === "yes"){
    return true;
  }

  return gameState.unlockedLessons.includes(topicId);
}
function renderLessons(){
  const list = topics.filter(t => t.term === currentTerm);

  $("termTitle").textContent = termName(currentTerm);
  $("termSubtitle").textContent =
    "Pumili ng lesson. Kailangan ng teacher password para buksan ang locked mission.";

  $("lessonGrid").innerHTML = list.map((t) => {
    const unlocked =
      gameState.unlockedLessons.includes(t.id) ||
      localStorage.getItem("ps_unlockAll") === "yes";

    return `
      <div class="lesson-card ${unlocked ? "" : "locked"}">
        <small>${t.game}</small>
        <h3>${t.icon} ${t.title}</h3>
        <p>${t.intro || ""}</p>

        ${
          unlocked
          ? `<button onclick="startTopic('${t.id}')">Laruin</button>`
          : `<button onclick="requestUnlock('${t.id}')">🔒 Locked</button>`
        }
      </div>
    `;
  }).join("");
}

function requestUnlock(topicId){
  const password = prompt("Teacher Password para ma-unlock ang mission:");

  if(password === TEACHER_PASSWORD){
    if(!gameState.unlockedLessons.includes(topicId)){
      gameState.unlockedLessons.push(topicId);
    }

    save();
    alert("Mission unlocked!");
    renderLessons();

  }else{
    alert("Maling password. Locked pa rin ang mission.");
  }
}

  function startTopic(id){

  if(
    !gameState.unlockedLessons.includes(id) &&
    localStorage.getItem("ps_unlockAll") !== "yes"
  ){
    requestUnlock(id);

    if(
      !gameState.unlockedLessons.includes(id) &&
      localStorage.getItem("ps_unlockAll") !== "yes"
    ){
      return;
    }
  }

  currentTopic = topics.find(t => t.id === id);

  if(!currentTopic){
    alert("Hindi makita ang mission.");
    return;
  }

  qIndex = 0;
  score = 0;
  selectedPair = [];
  tempOrder = [];

  const npc = npcs[currentTopic.npc] || npcs.simoun;

  $("gameNpcAvatar").textContent = npc.avatar;
  $("gameNpcName").textContent = npc.name;
  $("gameNpcLine").textContent = npc.line;
  $("gameTitle").textContent = currentTopic.icon + " " + currentTopic.title;
  $("gameIntro").textContent = currentTopic.intro;

  showScreen("gameScreen");
  renderGame();
}
function renderGame(){ if(["quiz","maze","dialogue","poster"].includes(currentTopic.type)) renderQuestionGame(); else if(currentTopic.type==="timeline") renderOrderGame(); else if(currentTopic.type==="match") renderMatchGame(); else if(currentTopic.type==="whoami") renderWhoAmI(); else if(currentTopic.type==="jumbled") renderJumbled(); }
function getQuestions(){ if(currentTopic.type==="dialogue") return currentTopic.questions.map(q=>({q:`"${q.line}" Sino ang pinakaangkop?`,choices:q.choices,answer:q.answer})); return currentTopic.questions }
function renderQuestionGame(){const qs=getQuestions(), q=qs[qIndex]; $("gameArea").innerHTML=`<div class="game-box"><p><b>Tanong ${qIndex+1}/${qs.length}</b></p><h2>${q.q}</h2>${q.choices.map((c,i)=>`<button class="choice" onclick="answerQuestion(${i})">${c}</button>`).join("")}<div id="feedback" class="feedback"></div></div>`}
function answerQuestion(i){const qs=getQuestions(), q=qs[qIndex], fb=$("feedback"); if(i===q.answer){score++; playSound("correctSound"); fb.innerHTML="<span style='color:#82e6a3'>Tama!</span>"}else{playSound("wrongSound"); fb.innerHTML=`<span style='color:#ff7676'>Mali. Sagot: ${q.choices[q.answer]}</span>`} setTimeout(()=>{qIndex++; if(qIndex>=qs.length) finishGame(score,qs.length); else renderQuestionGame()},850)}
let selectedOrderIndex = null;

function renderOrderGame(){
  tempOrder = shuffle([...currentTopic.items]);
  selectedOrderIndex = null;
  renderOrderCurrent();
}

function renderOrderCurrent(){
  $("gameArea").innerHTML = `
    <div class="game-box">
      <p>I-click/tap ang kahon na ililipat, tapos i-click/tap ang target position.</p>

      <div class="drag-list">
        ${tempOrder.map((item, i) => `
          <div class="drag-item ${selectedOrderIndex === i ? "selected-drag" : ""}" onclick="tapMoveItem(${i})">
            <span class="drag-icon">☰</span>
            <span>${item}</span>
          </div>
        `).join("")}
      </div>

      <button class="submit-btn" onclick="checkOrder()">Suriin</button>
      <div id="feedback" class="feedback"></div>
    </div>
  `;
}

function tapMoveItem(index){
  if(selectedOrderIndex === null){
    selectedOrderIndex = index;
    renderOrderCurrent();
    return;
  }

  if(selectedOrderIndex === index){
    selectedOrderIndex = null;
    renderOrderCurrent();
    return;
  }

  const movedItem = tempOrder.splice(selectedOrderIndex, 1)[0];
  tempOrder.splice(index, 0, movedItem);

  selectedOrderIndex = null;
  renderOrderCurrent();
}

function checkOrder(){
  const ok = tempOrder.every((item, index) => {
    return item === currentTopic.items[index];
  });

  if(ok){
    finishGame(1, 1);
  }else{
    $("feedback").innerHTML =
      "<span style='color:#ff7676'>May mali pa sa ayos. I-click/tap ulit ang mga kahon.</span>";
    playSound("wrongSound");
  }
}

function renderMatchGame(){const cards=[]; currentTopic.pairs.forEach((p,i)=>{cards.push({text:p[0],pair:i});cards.push({text:p[1],pair:i})}); window.matchCards=shuffle(cards); window.matched=[]; $("gameArea").innerHTML=`<div class="game-box"><p>Piliin ang dalawang magkapareha.</p><div class="pair-grid">${window.matchCards.map((c,i)=>`<button id="pair${i}" class="pair-card" onclick="selectMatch(${i})">${c.text}</button>`).join("")}</div><div id="feedback" class="feedback"></div></div>`}
function selectMatch(i){if(window.matched.includes(i)||selectedPair.includes(i))return; selectedPair.push(i); $("pair"+i).classList.add("selected"); if(selectedPair.length===2){let [a,b]=selectedPair; if(window.matchCards[a].pair===window.matchCards[b].pair){window.matched.push(a,b); playSound("correctSound"); $("feedback").innerHTML="<span style='color:#82e6a3'>Match!</span>"; if(window.matched.length===window.matchCards.length)finishGame(1,1)}else{playSound("wrongSound"); setTimeout(()=>{$("pair"+a).classList.remove("selected");$("pair"+b).classList.remove("selected")},600)} selectedPair=[]}}
function renderWhoAmI(){const q=currentTopic.questions[qIndex]; $("gameArea").innerHTML=`<div class="game-box"><p><b>Clue ${qIndex+1}/${currentTopic.questions.length}</b></p><h2>${q.clue}</h2><input id="whoInput" placeholder="I-type ang sagot"><button class="submit-btn" onclick="checkWho()">Sagot</button><div id="feedback" class="feedback"></div></div>`}
function checkWho(){const q=currentTopic.questions[qIndex]; const ans=$("whoInput").value.trim().toLowerCase(); if(ans===q.answer.toLowerCase()){score++;playSound("correctSound");$("feedback").innerHTML="<span style='color:#82e6a3'>Tama!</span>"}else{playSound("wrongSound");$("feedback").innerHTML=`<span style='color:#ff7676'>Sagot: ${q.answer}</span>`} setTimeout(()=>{qIndex++; if(qIndex>=currentTopic.questions.length)finishGame(score,currentTopic.questions.length); else renderWhoAmI()},850)}
function renderJumbled(){const word=currentTopic.words[qIndex]; $("gameArea").innerHTML=`<div class="game-box"><p><b>Salita ${qIndex+1}/${currentTopic.words.length}</b></p><div class="word">${shuffle(word.split("")).join("")}</div><input id="jumbleInput" placeholder="Ayusin ang salita"><button class="submit-btn" onclick="checkJumbled()">Sagot</button><div id="feedback" class="feedback"></div></div>`}
function checkJumbled(){const word=currentTopic.words[qIndex]; const ans=$("jumbleInput").value.trim().toUpperCase(); if(ans===word){score++;playSound("correctSound");$("feedback").innerHTML="<span style='color:#82e6a3'>Tama!</span>"}else{playSound("wrongSound");$("feedback").innerHTML=`<span style='color:#ff7676'>Sagot: ${word}</span>`} setTimeout(()=>{qIndex++; if(qIndex>=currentTopic.words.length)finishGame(score,currentTopic.words.length); else renderJumbled()},850)}
function finishGame(points,total){
  progress[currentTopic.id] = true;

  const currentIndex = topics.findIndex(t => t.id === currentTopic.id);

  if(currentIndex >= 0 && currentIndex < topics.length - 1){
    const nextTopic = topics[currentIndex + 1];

    if(nextTopic){
      gameState.pendingUnlock = nextTopic.id;
    }
  }

  scores.push({
    topic: currentTopic.title,
    game: currentTopic.game,
    score: points,
    total: total,
    date: new Date().toLocaleString()
  });

  player.xp += 20;

  save();
  playSound("victorySound");

  $("resultText").innerHTML =
    `<b>${currentTopic.title}</b><br>
    Laro: <b>${currentTopic.game}</b><br>
    Iskor: <b>${points}/${total}</b><br><br>
    ✅ Complete na ang mission!<br>
    Tawagin ang guro para i-unlock ang susunod na lesson.`;

  showScreen("resultScreen");
}
function unlockAward(a){if(!awards.includes(a)){awards.push(a); save(); const t=$("toast"); t.textContent="🏆 "+a; t.classList.remove("hidden"); playSound("unlockSound"); setTimeout(()=>t.classList.add("hidden"),2500)}}
function openPanel(type){const panel=$("hubPanel"), title=$("panelTitle"), content=$("panelContent"); panel.classList.remove("hidden"); if(type==="characters"){title.textContent="👥 Characters"; content.innerHTML=characters.map(c=>`<p>${c.avatar} <b>${c.name}</b> — ${c.role}</p>`).join("")} if(type==="collection"){title.textContent="📘 Collection"; content.innerHTML=`<p>📜 GOMBURZA Scroll</p><p>🚢 Bapor Tabo Badge</p><p>🔍 Research Lens</p><p>🪶 Literary Feather</p><p>🎨 Poster Seal</p>`} if(type==="journal"){title.textContent="🪶 Journal"; content.innerHTML=`<p>Term 1: El Filibusterismo — ${topics.filter(t=>t.term==="term1"&&progress[t.id]).length}/${topics.filter(t=>t.term==="term1").length}</p><p>Term 2: Makabagong Akda — ${topics.filter(t=>t.term==="term2"&&progress[t.id]).length}/${topics.filter(t=>t.term==="term2").length}</p><p>Term 3: Pananaliksik — ${topics.filter(t=>t.term==="term3"&&progress[t.id]).length}/${topics.filter(t=>t.term==="term3").length}</p>`} if(type==="leaderboard"){title.textContent="🏅 Leaderboard"; const latest=scores.slice(-8).reverse(); content.innerHTML=latest.length?latest.map(s=>`<p>${s.score}/${s.total} — ${s.topic}</p>`).join(""):"<p>Wala pang score.</p>"} if(type==="achievements"){title.textContent="🏆 Awards"; content.innerHTML=awards.length?awards.map(a=>`<p>🏆 ${a}</p>`).join(""):"<p>Wala pa.</p>"} if(type==="settings"){title.textContent="⚙️ Settings"; content.innerHTML=`<button onclick="toggleMusic()">🎵 Toggle Music</button><button onclick="showScreen('gate')">🚪 Exit</button>`}}
function closePanel(){$("hubPanel").classList.add("hidden")}
function unlockAll(){localStorage.setItem("ps_unlockAll","yes"); updateTeacherOutput("All lessons are now unlocked.")}
function resetProgress(){if(confirm("Reset all student progress?")){localStorage.removeItem("ps_progress");localStorage.removeItem("ps_scores");localStorage.removeItem("ps_awards");localStorage.removeItem("ps_unlockAll");progress={};scores=[];awards=[];save();updateTeacherOutput("Progress reset.")}}
function exportScores(){updateTeacherOutput(JSON.stringify(scores,null,2) || "No scores yet.")}
function updateTeacherOutput(txt){$("teacherOutput").textContent=txt}
function shuffle(arr){return arr.sort(()=>Math.random()-.5)}
renderCharacters();
updateHUD();

function changeCharacter(){
  localStorage.removeItem("ps_player");
  player = null;
  showScreen("characterSelect");
}
function hardReset(){
  localStorage.removeItem("ps_unlockAll");
  localStorage.removeItem("ps_gameState");
  location.reload();
}window.enterStudent = function(){
  playSound("clickSound");

  player = JSON.parse(localStorage.getItem("ps_player")) || null;

  if(player){
    showScreen("home");
  }else{
    showScreen("characterSelect");
  }
};

window.showTeacherLogin = function(){
  document.getElementById("teacherLogin").classList.remove("hidden");
};