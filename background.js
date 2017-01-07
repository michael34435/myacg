$(function() {
    function doAction() {
        var id = <MYACG_ID_HERE>;
        var page = 'https://www.myacg.com.tw/goods_detail.php?gid=' + id;
        var order = 'https://www.myacg.com.tw/order_pay.php?gid=' + id + '&buy_amount=1';
        var pay = 'https://www.myacg.com.tw/order_pay_detail.php'
        var current = $(location).attr('href');

        switch (current) {
            case order:
                var option = [];
                $('#shipping_fee option').each(function(key, value) {
                    option.push($(value).val());
                });

                // 移除請選擇的選項
                option.shift();

                // 取得第一個選項
                var should = option.shift();

                // 填入運費
                $('#shipping_fee').val(should);

                // 送出訂單
                $('#send_order').get(0).click();
                break;
            case pay:
                // 有ibon的話使用ibon付款
                var ibon = $('#ibon');
                if (ibon.size() > 0) {
                    $('#ibon').get(0).click();
                }

                // 同會員資料
                $('#same_member').trigger('click');

                var eshop = $('#eshopbutton');
                if (eshop.css('display') != 'none') {
                    eshop.get(0).click();
                }

                // 送出付款資料
                var send = $('#send_form_btn');
                if (send.css('display') != 'none') {
                    send.get(0).click();
                }
                break;
            case page:
                var button = $('.btn_buy');
                // 如果可以購買的話點擊購買，不行的話則重新整理
                if (button.size() > 0) {
                    button.get(0).click();
                } else {
                    $(location).attr('href', '');
                }
                break;
        }

        console.log('Fire!');
        setTimeout(doAction, 500);
    }

    doAction();
});
