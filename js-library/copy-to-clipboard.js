function copy_to_clipboard(text){

    // テキストエリアを用意する
    let text_box = document.createElement("textarea");
    text_box.setAttribute("type", "hidden");

    // テキストエリアへ値をセット
    text_box.textContent = text;

    // 子要素にテキストエリアを配置
    document.body.appendChild(text_box);

    // 追加テキストエリアの値をコピー
    text_box.select();
    let ret_copy = document.execCommand('copy');

    // 追加テキストエリアを削除
    document.body.removeChild(text_box);

    // 処理結果を返却
    return ret_copy;
}
