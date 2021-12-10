var $ix=0;var $ix1=0;
var $iy=0;var $iy1=0;var $iy2;var $iy3;var $iy4;var $iy5;
var $iword;
var $porog=0;
var $t=2000;
var $rand1;
var $rand2;
var $rand3;
var $rand4;
var $prover=0;
var $res_win=0;
var $res_los=0;
var random5;
var data5;
var result;
var $res_x1=1;
var $res_x2=2;
var $res_x3=3;
var $res_x4=4;
var $res_x5=5;
var $res_y;
var $res_x;
var $res_y1;
var $res_y2;
var $res_y3;
var $res_y4;
var $res_y5; 
var znachdiv;
var $sum=0;
var $flag;var $schetwin=0;
var $pause=0;
var mass=[];
var $flagsort;
var $flagclick;

$(document).ready(function(){
				rusword=[];
				engword=[];


});				
				

$(document).ready(function(){

function urlEncode(str) {

    if (!str || typeof(str) == "undefined") return;
    var utf8Array = {};

    var i = j = j2 = 0;
    for (i = 0; i <= 255; i++) {
        j = parseInt(i/16); var j2 = parseInt(i%16);
        utf8Array[String.fromCharCode(i)] = ('%' + j.toString(16) + j2.toString(16)).toUpperCase();
    }

    var rusAdditional = {
        '_' : '%5F', 'А' : '%C0', 'Б' : '%C1', 'В' : '%C2', 'Г' : '%C3', 'Д' : '%C4', 'Е' : '%C5',
        'Ж' : '%C6', 'З' : '%C7', 'И' : '%C8', 'Й' : '%C9', 'К' : '%CA', 'Л' : '%CB', 'М' : '%CC',
        'Н' : '%CD', 'О' : '%CE', 'П' : '%CF', 'Р' : '%D0', 'С' : '%D1', 'Т' : '%D2', 'У' : '%D3',
        'Ф' : '%D4', 'Х' : '%D5', 'Ц' : '%D6', 'Ч' : '%D7', 'Ш' : '%D8', 'Щ' : '%D9', 'Ъ' : '%DA',
        'Ы' : '%DB', 'Ь' : '%DC', 'Э' : '%DD', 'Ю' : '%DE', 'Я' : '%DF', 'а' : '%E0', 'б' : '%E1',
        'в' : '%E2', 'г' : '%E3', 'д' : '%E4', 'е' : '%E5', 'ж' : '%E6', 'з' : '%E7', 'и' : '%E8',
        'й' : '%E9', 'к' : '%EA', 'л' : '%EB', 'м' : '%EC', 'н' : '%ED', 'о' : '%EE', 'п' : '%EF',
        'р' : '%F0', 'с' : '%F1', 'т' : '%F2', 'у' : '%F3', 'ф' : '%F4', 'х' : '%F5', 'ц' : '%F6',
        'ч' : '%F7', 'ш' : '%F8', 'щ' : '%F9', 'ъ' : '%FA', 'ы' : '%FB', 'ь' : '%FC', 'э' : '%FD',
        'ю' : '%FE', 'я' : '%FF', 'ё' : '%B8', 'Ё' : '%A8'
    }
    for (i in rusAdditional) utf8Array[i] = rusAdditional[i];

    var res = "";
    for(i = 0; i < str.length; i++) {
        var simbol = str.substr(i,1);
        res += typeof utf8Array[simbol] != "undefined" ? utf8Array[simbol] : simbol;
    }

    res = res.replace(/\s/g, "+");
    return res;
}				

engwordA=["about","across","after","again","against","air","all","almost","along","always","and","another","answer","any","anything","are","arm","around","as","ask","at","away"];

engwordB=["back","be","beat","because","bed","before","begin","behind","believe","better","big","black","body","both","boy","break","bring","build","building","but","by"];

engwordC=["call","can","car","close","come","continue","course","cut"];

engwordD=["dark","day","dead","do","door","down","drive","drop"];

engwordE=["each","end","enough","even","ever","every","eye"];

engwordF=["face","fall","far","feel","feet","few","find","fire","first","five","floor","follow","for","friend","from","front"];

engwordG=["get","girl","give","glass","go","god","good","great","gun","guy"];

engwordH=["hair","half","hand","happen","hard","have","he ","head","hear","hell","help","her","here","high","him","himself","hold","holding","home","hour","house","how"];

engwordI=["I","if","in","inside","into","it","its"];

engwordJ=["just"];

engwordK=["keep","kid","kill","know"];

engwordL=["last","late","laugh","leave","let","life","light","like","line","little","long","look","lot","love"];

engwordM=["make","man","may","maybe","me","mean","meet","meeting","mind","minute","moment","more","most","move","much","must","my"];

engwordN=["name","need","never","new","next","night","no","nod","not","nothing","now"];

engwordO=["of","of course","off","office","OK","old","on","once","one","only","open","or","other","others ","our","out","over","own"];

engwordP=["pass","phone","pick","place","play","point","pull","put"];

engwordQ=[];

engwordR=["reach","read","reading","really","remember","right","room","run"];

engwordS=["same","say","second","see","seem","set","shake","she","shoot","should","show","side","sit","sitting","small","smile","so","some","something","sound","speak","stand","standing ","stare","start","step","still","stop","street","suddenly","sure"];

engwordT=["table","take","talk","tell","than","thank","that","their","them","then","there","these","they","thing","think","this","those","though","three","through","time","to","too","toward  ","try","turn","two"];

engwordU=["under","until","up","use"];

engwordV=["very","voice"];

engwordW=["wait","walk","wall","want","was","watch","water","way","we","well","were","what","when","where","which","while","white","who","why","win","winning    ","window","with","without","woman","word","work","world"];

engwordX=[];

engwordY=["year","yes","you","young","your"];

engwordZ=[];


ruswordA=["кругом; вокруг; около","через; сквозь;  поперек","после; через;  потом","опять; снова; еще раз","против","воздух;  воздушный","все; вся; всё","почти; чуть не","вдоль; по;  вперед","всегда","и; с; а ","другой; еще один","ответ;  отвечать","какой-нибудь; любой","что-нибудь; что угодно","мн число наст время ","рука; вооружать","кругом; вокруг; поблизости; по","как;  когда; в то время как","спрашивать","около; у; в; на","далеко; прочь"];

ruswordB=["спина;  задний;  назад; обратно","быть; существовать","бить; ударять","потому что; так как","кровать; постель","перед;  раньше","начинать; приступать","за;  сзади; позади","верить; полагать; думать","лучше ","большой","черный ","тело","оба; и тот и другой","мальчик; парень","ломать; разбивать","приносить; приводить; привозить","строить","здание; строение","только; лишь;  кроме;  но; а","у; около;  близко; рядом"];

ruswordC=["призыв; звонок; звать","мочь; уметь; возможно","автомобиль; машина","закрывать"," приходить; приезжать; идти; ехать","продолжать","курс","резать; стричь; снижать"];

ruswordD=["темнота;  темный","день; сутки","мертвый","делать; действовать","дверь","вниз; вниз по; вдоль по","ехать; вождение","капля; понижение;  капать"];

ruswordE=["каждый; всякий","конец;  кончать","достаточно","даже; ровно;  ровный","когда-либо; всегда","каждый; всякий","глаз; взгляд;  смотреть"];

ruswordF=["лицо;  стоять лицом","падать; понижаться; осень","дальний;  далеко; намного","чувствовать; ощущать; трогать","ноги","немного; несколько","находить; обнаруживать","огонь; пожар;  стрелять","первый;  сначала","пять","пол; этаж","следовать за; следить; понимать","в течение; на; для","друг; подруга","от; из; с","передний;  фасад"];

ruswordG=["получать; брать; приобретать","девочка; девушка","давать; передавать","стекло; стакан","идти; ехать; уходить","бог","хороший;  добро; польза","большой; великий; великолепный","пистолет; ружье; пушка","парень"];

ruswordH=["волос; волосы","половина;  наполовину","рука;  передавать","случаться; происходить","твердый; трудный;  сильно","иметь; получать","он","голова; руководитель;  возглавлять","слышать; слушать","ад; преисподняя","помощь;  помогать","её","здесь; тут; сюда; вот","высокий; высший;  высоко","его","себя; сам","держать; владеть; вмещать","имущество; вклад;  держащий","дом;  домашний;  домой","час","дом","как; каким образом"];

ruswordI=["я","если","в","внутренний;  внутри;  внутрь","в","он; она; оно; это","его; её (о предметах; животных)"];

ruswordJ=["только что; точно; просто"];

ruswordK=["держать; содержать; хранить","ребенок; подшучивать; обманывать","убивать","знать"];

ruswordL=["последний; прошлый; длиться","поздний; недавний;  поздно","смех;  смеяться","покидать; оставлять; забывать","позволять; разрешать","жизнь","свет; огонь; легкий","похожий; любить; нравиться","линия; ряд; очередь","маленький","длинный; долгий; давно","взгляд;  смотреть; выглядеть","жребий; судьба","любовь;  любить"];

ruswordM=["делать; производить; совершать","человек; мужчина ","мочь;  май (месяц)","может быть","мне; меня","середина; средство; скупой","встречать; знакомиться","собрание; митинг; встреча","ум; мнение; обращать внимание","минута","мгновение; момент","больше; более","большинство;  наибольший","движение;  двигать","много; очень; гораздо","должен; обязан; должно быть","мой"];

ruswordN=["имя; название;  называть","нужда;  нуждаться","никогда","новый","следующий; будущий;  потом","ночь; вечер","нет;  не","кивать головой;  кивок","не; нет; ни","ничто; ничего","теперь; сейчас"];

ruswordO=["из; от; о; об","конечно ","выключение","контора; служба; ведомство","хорошо; ладно","старый","на","однажды; когда-то; один раз","один; единица","только;  единственный","открытый;  открывать","или","другой; иной; еще","другие; остальные","наш","вне; снаружи","над; через; за; свыше","свой; собственный;  владеть"];

ruswordP=["проходить; передавать; пропуск","телефон;  звонить по телефону","собирать; выбирать","место;  помещать","игра; пьеса;  играть","острие; точка; пункт; смысл","тянуть; тащить","класть; положить"];

ruswordQ=[];

ruswordR=["достигать; доставать; простираться","читать; гласить","чтение","действительно","помнить; вспоминать","право; правильность","комната","бежать; двигаться"];

ruswordS=["тот же самый","говорить; сказать","секунда;  второй","видеть; смотреть; понимать","казаться","ставить; помещать; садиться (о солнце)","трясти; дрожать; качать","она","стрелять; поражать; бросать","должен; следует","показ; выставка; спектакль","сторона","сидеть; заседать","сидение;  сидящий; сидячий","маленький","улыбка;  улыбаться","так; таким образом; тоже; также","несколько; некоторые","что-то; что-нибудь;  примерно","звук;  звучать; казаться","говорить; разговаривать; произносить","стоять; ставить; терпеть","стоящий;  положение","пристально смотреть; уставиться","начало;  начинать","шаг; ступенька;  шагать","тихий;  тихо; все еще; все же","остановка;  останавливать","улица","вдруг; внезапно","уверенный;  конечно"];

ruswordT=["стол","брать; доставлять; принимать","разговор;  говорить","говорить; сказать; рассказывать","чем; нежели","благодарить;  благодарность","тот; та; то","их","им","тогда; затем","там; туда; вот","эти","они","вещь; предмет","думать; считать; полагать","этот; эта; это","те","однако; все же;  хотя","три","через; сквозь","время; эпоха; раз","к; в; на; до; для","также; тоже; слишком","к; по направлению к","попытка;  пытаться; пробовать","поворот;  поворачивать","два"];

ruswordU=["под; ниже","до; до тех пор пока","наверх; выше;  вверх по; вдоль по","применение; польза; употреблять"];

ruswordV=["очень","голос"];

ruswordW=["ждать","ходьба; прогулка; гулять","стена","хотеть; нуждаться","был; была; было","смотреть; следить; наблюдение; часы","вода","путь; дорога; направление; метод; образ действия","мы","хорошо","были","что","когда","где; куда","который; что","в то время как; пока; промежуток времени","белый","кто; который","почему","выиграть; победить","побеждающий","окно","с; вместе с","без","женщина","слово","работа;  работать","мир; вселенная"];

ruswordX=[];

ruswordY=["год","да","ты; вы","молодой; юный","твой; ваш"];

ruswordZ=[];


				
				rusword=[];
				engword=[];					
				$("#lb_A").html(engwordA.length);
				$("#lb_B").html(engwordB.length);
				$("#lb_C").html(engwordC.length);
				$("#lb_D").html(engwordD.length);
				$("#lb_E").html(engwordE.length);
				$("#lb_F").html(engwordF.length);
				$("#lb_G").html(engwordG.length);
				$("#lb_H").html(engwordH.length);
				$("#lb_I").html(engwordI.length);
				$("#lb_J").html(engwordJ.length);
				$("#lb_K").html(engwordK.length);
				$("#lb_L").html(engwordL.length);
				$("#lb_M").html(engwordM.length);
				$("#lb_N").html(engwordN.length);
				$("#lb_O").html(engwordO.length);
				$("#lb_P").html(engwordP.length);
				$("#lb_Q").html(engwordQ.length);
				$("#lb_R").html(engwordR.length);
				$("#lb_S").html(engwordS.length);
				$("#lb_T").html(engwordT.length);
				$("#lb_U").html(engwordU.length);
				$("#lb_V").html(engwordV.length);
				$("#lb_W").html(engwordW.length);
				$("#lb_X").html(engwordX.length);
				$("#lb_Y").html(engwordY.length);
				$("#lb_Z").html(engwordZ.length);
				
				$(".lb1").css('color','#4DB200');
				$(".lb1").css('font','strong');
				
			
				});		
			
				$("#eng500").click(function(){
				$("#wr").hide();
				
				if (radiotm05.checked==true){
				$t=500;
				}				

				
				if (radiotm1.checked==true){
				$t=1000;
				}
				
								
				if (radiotm2.checked==true){
				$t=2000;
				}
				
				if (radiotm3.checked==true){
				$t=3000;
				}
				
				if (radiotm4.checked==true){
				$t=4000;
				}
				
				if (radiosort.checked==true){
				$flagsort=1;
				}
				
				if (radiounsort.checked==true){				
				$flagsort=0;
				}
				
				if (radiounclick.checked==true){
				$flagclick=0;
				}
				
				if (radioclick.checked==true){				
				$flagclick=1;
				}
				$("#text").hide();
				$("#alert").show();
				$("#runstop").show();
				if (chb_A.checked==true){
				rusword=rusword.concat(ruswordA);
				engword=engword.concat(engwordA);

				}
				
				if (chb_B.checked==true){
				rusword=rusword.concat(ruswordB);
				engword=engword.concat(engwordB);
				
				}
				
				if (chb_C.checked==true){
				rusword=rusword.concat(ruswordC);
				engword=engword.concat(engwordC);
				}
				
				if (chb_D.checked==true){
				rusword=rusword.concat(ruswordD);
				engword=engword.concat(engwordD);
				}
				
				if (chb_E.checked==true){
				rusword=rusword.concat(ruswordE);
				engword=engword.concat(engwordE);
				}
				
				if (chb_F.checked==true){
				rusword=rusword.concat(ruswordF);
				engword=engword.concat(engwordF);
				}
				
				if (chb_G.checked==true){
				rusword=rusword.concat(ruswordG);
				engword=engword.concat(engwordG);
				}
				
				if (chb_H.checked==true){
				rusword=rusword.concat(ruswordH);
				engword=engword.concat(engwordH);
				}
				
				if (chb_I.checked==true){
				rusword=rusword.concat(ruswordI);
				engword=engword.concat(engwordI);
				}
				
				if (chb_J.checked==true){
				rusword=rusword.concat(ruswordJ);
				engword=engword.concat(engwordJ);
				}
				
				if (chb_K.checked==true){
				rusword=rusword.concat(ruswordK);
				engword=engword.concat(engwordK);
				}
				
				if (chb_L.checked==true){
				rusword=rusword.concat(ruswordL);
				engword=engword.concat(engwordL);
				}
				
				if (chb_M.checked==true){
				rusword=rusword.concat(ruswordM);
				engword=engword.concat(engwordM);
				}
				
				if (chb_N.checked==true){
				rusword=rusword.concat(ruswordN);
				engword=engword.concat(engwordN);
				}
				
				if (chb_O.checked==true){
				rusword=rusword.concat(ruswordO);
				engword=engword.concat(engwordO);
				}
				
				if (chb_P.checked==true){
				rusword=rusword.concat(ruswordP);
				engword=engword.concat(engwordP);
				}
				
				if (chb_Q.checked==true){
				rusword=rusword.concat(ruswordQ);
				engword=engword.concat(engwordQ);
				}
				
				if (chb_R.checked==true){
				rusword=rusword.concat(ruswordR);
				engword=engword.concat(engwordR);
				}
				
				if (chb_S.checked==true){
				rusword=rusword.concat(ruswordS);
				engword=engword.concat(engwordS);
				}
				
				if (chb_T.checked==true){
				rusword=rusword.concat(ruswordT);
				engword=engword.concat(engwordT);
				}
				
				if (chb_U.checked==true){
				rusword=rusword.concat(ruswordU);
				engword=engword.concat(engwordU);
				}
				
				if (chb_V.checked==true){
				rusword=rusword.concat(ruswordV);
				engword=engword.concat(engwordV);
				}
				
				if (chb_W.checked==true){
				rusword=rusword.concat(ruswordW);
				engword=engword.concat(engwordW);
				}
				
				if (chb_X.checked==true){
				rusword=rusword.concat(ruswordX);
				engword=engword.concat(engwordX);
				}
				
				if (chb_Y.checked==true){
				rusword=rusword.concat(ruswordY);
				engword=engword.concat(engwordY);
				}
				
				if (chb_Z.checked==true){
				rusword=rusword.concat(ruswordZ);
				engword=engword.concat(engwordZ);

				}

				if (engword.length<1){
				alert ("Вы не выбрали ни одной буквы для изучения, пометьте требуемую или несколько и нажмите кнопку Начать");
				}else{
				$("#eng500").hide();
				$("#kolsimbol").hide();
				$("#viborsimbol").hide();
				$("#viborsort").hide();
				$("#vibkoltco").hide();
				$("#viborlevel").hide();

				mass2=engword.length;
				mass.length = mass2;
				$("#numberwordW1").html(mass2);
				if ($flagsort==0){
				
				$.get("random500.html", { par1: mass2 }, function(result){
				result = result.substring(3,result.length-1);
				mass = result.split(",");
				});	
				}
				
				if ($flagsort==1){

				$.get("sort500.html", { par1: mass2 }, function(result){
				result = result.substring(3,result.length-1);
				mass = result.split(",");
				});	
				}

			

				
				window.setTimeout(action111,3000);
				
				}
				
				function action111(){
				$("#eng_word").show();
				$("#rus_word").show();
				if ($porog==0){
				lightning_one();
				$porog=$porog+1;
				}
				}
				});	
				
				
				
				
				function lightning_all(){
				$("#eng_word").append(engword[mass[$ix]]);
				if ($pause==0){
				window.setTimeout(lightning_two,$t);
				}
				};	
				
				function lightning_one(){
				$("#contenerword2").show();
				$("#alert").hide();
				$("#run").show();
				$("#numberword1").show();
				$("#numberwordW1").show();
				$("#rus_text").show();
				$("#eng_text").show();
				$("#pause").show();
				$("#eng_word").empty();
				$("#rus_word").empty();
				$("#eng_word").append(engword[mass[$ix]]);
				if ($pause==0){
				window.setTimeout(lightning_two,$t);
				}
				};	
				
				function lightning_two(){
				$("#rus_word").append(rusword[mass[$iy]]);
				$ix=$ix+1;
				$iy=$iy+1;
				if ($pause==0){
				if ($ix>mass2){
				if ($flagclick==1){
				$ix=0;
				$iy=0;
				lightning_all();
				}else{
				$("#end").show();
				$("#end").append(" <font color=ff0033>Слова на выбранные Вами буквы закончились</font>");
				$("#eng_word").hide();
				$("#rus_word").hide();
				$pause=1;
				}
				}else{
				window.setTimeout(lightning_one,$t);
				}
				}
				};	
				
				$("#pause").click(function(){
				$pause=1;
				});
				
				$("#run").click(function(){
				if ($pause==1){
				$pause=0;
				lightning_one();
				}
				});
				
				
				
				$("#ALL_CHECKED").click(function(){

				if (ALL_CHECKED.checked==true){


				$(".chb1:enabled").prop("checked",true);
				rusword=[];
				engword=[];

				}else{


				$(".chb1:enabled").prop("checked",false);
				rusword=[];
				engword=[];
				}
				});	

				
								
				$("#radiotm05").click(function(){
				$t=500;
				});	
				
				$("#radiotm1").click(function(){
				$t=1000;
				});	
				
				$("#radiotm2").click(function(){
				$t=2000;
				});	
				
				$("#radiotm3").click(function(){
				$t=3000;
				});	
				
				$("#radiotm4").click(function(){
				$t=4000;
				});	
				
								
				$("#radiosort").click(function(){
				$flagsort=1;
				actionarray();
				});	
				
				$("#radiounsort").click(function(){
				$flagsort=0;
				actionarray();
				});
				
				$("#radioclick").click(function(){
				$flagclick=1;
				alert($flagclick);
				});	
				
				$("#radiounclick").click(function(){
				$flagclick=0;
				alert($flagclick);
				});
				

				function actionarray(){
				if ($flagsort==0){
				
				$.get("random500.html", { par1: mass2 }, function(result){
				result = result.substring(3,result.length-1);
				mass = result.split(",");
				});	
				}
				
				if ($flagsort==1){

				$.get("sort500.html", { par1: mass2 }, function(result){
				result = result.substring(3,result.length-1);
				mass = result.split(",");
				});	
				}
				}
				
								
				$("#reload").click(function(){
				location.reload()

				});
				
				
				
				
			
		
