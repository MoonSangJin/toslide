const messageToggleBtn = document.getElementById('toggleMessage');
const gatherToggleBtn = document.getElementById('toggleGather');
const gatherToggleText = document.getElementById('toggleGatherText');
let gathering = false;

const toggle = () => {
  if ($('.message').css('display') == 'none') {
    $('.message').show();
  } else {
    $('.message').hide();
  }
};

const toggleGather = () => {
  if (gathering) {
    gatherToggleBtn.src = 'asset/img-2021/PNG_수합중지.png';
    gatherToggleText.innerHTML = '수합중지';
    gathering = false;
    return;
  } else {
    gatherToggleBtn.src = 'asset/img-2021/PNG_수합중.png';
    gatherToggleText.innerHTML = '수합중';
    gathering = true;
    return;
  }
};
messageToggleBtn.onclick = toggle;
gatherToggleBtn.onclick = toggleGather;
