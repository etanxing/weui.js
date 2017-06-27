// import 'weui';
import FastClick from 'fastclick';
import weui from '../src/weui';

FastClick.attach(document.body);

// /* tab */
// weui.tab('#tab',{
//     defaultIndex: 0
// });
// 表单提交
get('formSubmitBtn').addEventListener('click', function() {
    //Get answers
    var items = ['english', 'age', 'work', 'workAu', 'edu', 'c1', 'c2', 'c3', 'c4', 'auExp', 'auExpSp'],
      score = items.map(gv).reduce(ac, 0),
      home = get('home'),
      result = get('result')

    var loading = weui.loading('提交中...')
    setTimeout(function() {
        loading.hide();
        weui.toast('提交成功', 1000)
        result.classList.remove('hidden')
        home.classList.add('hidden')
    }, 1000)
});

get('goBack').addEventListener('click', function() {
  result.classList.add('hidden')
  home.classList.remove('hidden')
})

function gv(id) {
    var el = get(id)
    return el.tagName == 'SELECT' ? el.value : el.checked
}

function ac(acc, val) {
    val = val === true ? 5 : (val === false ? 0 : +val)
    return acc + val
}

function get(id) {
  return document.getElementById(id)
}
