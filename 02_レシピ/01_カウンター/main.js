const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const multipleButton = document.getElementById("multiple-button")

let count = 0

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function () {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}

minusButton.onclick = function () {
  // count を更新
  count -= 1
  // count を表示
  display.textContent = count
}

multipleButton.onclick = function () {
  // count を更新
  count *= 2
  // count を表示
  display.textContent = count
}
