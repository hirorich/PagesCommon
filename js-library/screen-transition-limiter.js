// ToDo: jQueryを読み込む

// ブラウザバックの抑制
$(function() {
    history.pushState(null, null, null);
    $(window).on('popstate', function (e) {
        
        // 初回アクセス時対策
        if (e.originalEvent.state) {
            return;
        }

        history.pushState(null, null, null);
    });
});

// リロードの抑制
// 右クリックからの読み込みは抑制不可
$(function() {
    $(document).on('keydown', function(e) {
        switch (e.which || e.keyCode) {
            case 82:
                // Ctrl+Rキー、Ctrl+Shift+Rキーの無効化
                // Ctrlが押されていない場合はOK
                if (!e.ctrlKey) {
                    break;
                }
                return false;
            case 116:
                // F5キー、Shift+F5キーの無効化
                return false;
        }
    });
});

// 右クリック禁止
$(function() {
    $(document).on('contextmenu', function(e) {
        return false;
    });
});
