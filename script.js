<script>
    // 簡易JS版ローマ字変換（本番はJavaのAPIと連携）
    const map = {
        "あ": "a", "い": "i", "う": "u", "え": "e", "お": "o",
        "か": "ka", "き": "ki", "く": "ku", "け": "ke", "こ": "ko",
        "さ": "sa", "し": "shi", "す": "su", "せ": "se", "そ": "so",
        "た": "ta", "ち": "chi", "つ": "tsu", "て": "te", "と": "to",
        "な": "na", "に": "ni", "ぬ": "nu", "ね": "ne", "の": "no",
        "は": "ha", "ひ": "hi", "ふ": "fu", "へ": "he", "ほ": "ho",
        "ま": "ma", "み": "mi", "む": "mu", "め": "me", "も": "mo",
        "や": "ya", "ゆ": "yu", "よ": "yo",
        "ら": "ra", "り": "ri", "る": "ru", "れ": "re", "ろ": "ro",
        "わ": "wa", "を": "wo", "ん": "n"
    };

    function convert() {
        const input = document.getElementById("hiraganaInput").value;
        let result = "";

        for (let c of input) {
            if (map[c]) {
                result += map[c];
            } else {
                result += "[?" + c + "]"; // default処理
            }
        }

        document.getElementById("output").value = result;

        // 履歴テーブルに追加
        const table = document.getElementById("historyTable");
        const row = table.insertRow(-1);
        row.insertCell(0).innerText = input;
        row.insertCell(1).innerText = result;
    }
</script>
