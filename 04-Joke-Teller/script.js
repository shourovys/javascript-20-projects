const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

//Disable/Enable Button
function toggleButton() {
  button.disabled = !button.disabled;
}

function tellMe(joke) {
  console.log('Tell me:', joke);
  VoiceRSS.speech({
    key: "610b4569c3564922bc74a1f45077fa82",
    src: joke,
    hl: "zh-tw",
    v: "Lee",
    r: -1,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

function getJokes() {
  const jokes = [
    {
      joke: '我覺得 你 看起來 有點 營養 不良，建議 你 吃掉 我。'
    },
    {
      joke: '我覺得 你 看起來 有點 營養 過剩，建議 你讓我吃，把你的肉肉分我一點。'
    },
    {
      joke: '我覺得 你個性 蠻 騷包，不過 我剛好喜歡叉燒包。'
    },
    {
      joke: '愛情 要馬各回各家，要馬你媽變我媽。'
    },
    {
      joke: '快樂的方式有很多種，最直接的，就是見到你。'
    },
    {
      joke: '「 我看電影 不喜歡 被爆雷。」「 那我可以抱你嗎？」'
    },
    {
      joke: '我喜歡看你為我吃東西，你知道吃什麼東西嗎？我喜歡看你為我吃醋。'
    },
    {
      joke: '我想你很忙，所以看前三個字就好了。'
    },
    {
      joke: '你知道你是什麼人嗎？你是世界上唯一讓我感到不再孤單的人。'
    },
    {
      joke: '很多人覺得你美得像一幅畫。但我覺得你美的 不像話。'
    },
    {
      joke: '麥當勞的甜心卡一點都不甜，因為裡面沒有你。'
    },
    {
      joke: '你就像空氣一樣，每天都一定要吸。'
    },
    {
      joke: '我喜歡上學，這樣我就可以跟你一起穿情侶裝了。'
    },
    {
      joke: '以後我只能跟你中午見面。因為我早晚會愛上你。'
    },
    {
      joke: '如果你繼續跟我在一起，你會變成壞人。因為我會把你寵壞。'
    },
    {
      joke: '我可以跟你要個東西嗎？要你屬於我。'
    },
    {
      joke: '你是 不是 很會玩樂器？不然 妳是怎麼撥動我的心弦？'
    },
    {
      joke: '如果我是冰淇淋，你就是我的太陽，因為我一看到你就融化了。'
    },
    {
      joke: '人沒有氧氣就活 不下去，但是我可以， 你知道為什麼嗎？哈哈，因為我有你這個小淘氣。'
    },
    {
      joke: '你知道嗎？我可以戒酒、戒宵夜，但是我戒不掉妳。'
    },
    {
      joke: '你長得好像我某個親戚？長得像我老婆。'
    },
    {
      joke: '你知道為什麼現在犯罪率這麼高嗎？啊啊啊，因為妳太美了。'
    },
    {
      joke: '我 不是 機器人，我是你的人。'
    },
    {
      joke: '我不像別人把你當成偶像，因為……我把你當成我的結婚對象。'
    },
    {
      joke: '我有一個超能力。我，我，我超愛你。嘿嘿。'
    },
    {
      joke: '妳知道嗎，人家都說我很獨立，其實不是我不需要任何人，而是那個人不是你。'
    },
    {
      joke: '鳥兒有天空，海豚有大海，無尾熊有尤加利樹，而你，有我！'
    },
    {
      joke: '你是茶葉，我是開水，我可以泡你嗎？'
    },
    {
      joke: '你實在不像話。我是說，美的不像話'
    },
    {
      joke: '你是茶葉，我是開水，我可以泡你嗎？'
    },
    {
      joke: '我不是不喜歡這個世界，而是我只喜歡有你的世界。'
    },
    {
      joke: '我救人無數，但救不了自己對你的相思病。？'
    },
    {
      joke: '你是茶葉，我是開水，我可以泡你嗎？'
    },
    {
      joke: '你知道我最喜歡哪個國家嗎？哈哈哈，我最喜歡跟妳回家。'
    },
    {
      joke: '如果你主動一點，我們不只有故事，還會有孩子。'
    },
    {
      joke: '我一直撩妳，妳為什麼不撩我一下，喵喵。'
    },
    {
      joke: '你已經擾亂了我的心，什麼時候來弄亂我的床呢？'
    },
    {
      joke: '我最近要去配眼鏡了，因為我發現，除了妳，我看不見別人了。'
    },
    {
      joke: '我最近要去配眼鏡了，因為我發現，除了妳，我看不見別人了。'
    },
    {
      joke: '我不要環遊全世界，我只要找到你就可以了。'
    },
    {
      joke: '我一點都不遺憾沒有在過去遇見你，因為遇見你以後，最美好的時光正開始了。'
    },
    {
      joke: '你好像又變胖了，因為妳在我心裡的份量變重了。'
    },
    {
      joke: '你想喝什麼？我想呵護妳。'
    },
    {
      joke: '我不想喜歡妳了。因為，我想愛妳'
    },
    {
      joke: '我不要臉，只要你'
    },
    {
      joke: '見什麼世面，我想見的是你'
    },
    {
      joke: '牛肉、豬肉、雞肉， 你要吃什麼肉呢？如果是我的話，我想吃妳這塊心頭肉。'
    },
    {
      joke: '我一點也沒有想你，我兩點再想你。'
    },
    {
      joke: '妳知道有三個人喜歡你嗎？我，我啊，就是我。'
    },
    {
      joke: '我要給你一個愛情的建議？建議你跟我在一起。'
    },
    {
      joke: '據統計，未婚生子的人數中有高機率為女性。'
    },
    {
      joke: '只要每天省下買一杯奶茶的錢，十天後就能買十杯奶茶。'
    },
    {
      joke: '我要給你一個愛情的建議？建議你跟我在一起。'
    },
    {
      joke: '台灣競爭力低落，在美國，就連小學生都會說流利的英語'
    },
    {
      joke: '當你的左臉被人打，那你的左臉就會痛。'
    },
    {
      joke: '知識就像內褲，看不見但很重要。'
    },
    {
      joke: '啊啊啊，不吃飽，哪有力氣減肥啊。'
    },
    {
      joke: '喵喵喵，我是妳的小貓貓。'
    },
    {
      joke: '再給我一次機會，我會好好說話的。'
    },
    {
      joke: '賴床是對周末最起碼的尊重'
    },
    {
      joke: '小時候我以為自己長大後可以拯救整個世界，等長大後才發現整個世界都拯救不了我。'
    },
    {
      joke: '我談過最長的戀愛，就是自戀。愛自己，沒有情敵。'
    },
    {
      joke: '心裡的話，說出來可能是詩，但留在肚子裡肯定會變成屎。'
    },
    {
      joke: '我想把我的一生濃縮成一句笑話。'
    },
    {
      joke: '再給我一次機會，我會好好說話的。'
    },
    {
      joke: '鹹魚翻了身，還是鹹魚啊。'
    },
    {
      joke: '醜小鴨會變成天鵝，不是 因為他努力了，而是他父母，本來就是天鵝'
    },
    {
      joke: '異性只為繁衍後代，同性才是人間真愛。'
    },
    {
      joke: '你再努力也沒有用，你爸沒錢。'
    },
    {
      joke: '長得醜就是病，不然整形醫院為什麼叫醫院。'
    },
  ];
  const jokesNumber = jokes.length;
  console.log(jokesNumber);
  const pickJokes = jokes[Math.floor(Math.random() * jokesNumber)];
  let joke = pickJokes.joke;
  tellMe(joke);
  toggleButton();
}

button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton)

