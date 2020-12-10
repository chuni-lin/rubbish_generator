function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateRubbish(options) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let rubbish = []
  if (options.customRadio === 'engineer') {
    rubbish =
      `身為一個工程師，${sample(task.engineer)}，${sample(phrase)}吧！`
  }

  if (options.customRadio === 'designer') {
    rubbish =
      `身為一個設計師，${sample(task.designer)}，${sample(phrase)}吧！`
  }

  if (options.customRadio === 'entrepreneur') {
    rubbish =
      `身為一個創業家，${sample(task.entrepreneur)}，${sample(phrase)}吧！`
  }

  if (rubbish.length === 0) {
    return '請先選擇一個想說幹話的對象！'
  }

  return rubbish
}

module.exports = generateRubbish