$(function(){
    $('#date').DatePicker({
        flat: true,
        date: '2008-07-31',
        current: '2008-07-31',
        calendars: 1,
        starts: 1
    });

    var now = new Date();
    now.addDays(-10);
    var now2 = new Date();
    now2.addDays(-5);
    now2.setHours(0,0,0,0);

    $('#date2').DatePicker({
        flat: true,
        date: ['2008-07-31', '2008-07-28'],
        current: '2008-07-31',
        format: 'Y-m-d',
        calendars: 1,
        mode: 'multiple',
        onRender: function(date) {
            return {
                disabled: (date.valueOf() < now.valueOf()),
                className: date.valueOf() == now2.valueOf() ? 'datepickerSpecial' : false
            }
        },
        starts: 0
    });

    $('#clearSelection').bind('click', function(){
        $('#date3').DatePickerClear();
        return false;
    });

    $('#date3').DatePicker({
        flat: true,
        date: ['2008-07-28','2008-07-31'],
        current: '2008-07-31',
        calendars: 3,
        mode: 'range',
        starts: 1
    });

    var $date4 = $("#date4"),
        dates = eval($date4.data('dates')),
        endOfSeason = 1374278400000;
    $('#date4').DatePicker({
        date: dates,
        current: dates[0],
        calendars: 1,
        mode: 'multiple',
        format: 'd-m-Y',
        starts: 1,
        modal: true,
        showCloseBtn: true,
        position: 'above',
        minAmountSelected: 1,
        maxAmountSelected: 10,
        onRender: function(date) {
            if (endOfSeason !== false)
            {
                return {
                    disabled: (!(now.valueOf() < date.valueOf() && date.valueOf() < endOfSeason) ? true : false)
                };
            } else {
                return {
                    disabled: (date.valueOf() < now.valueOf())
                };
            }
        }
    });

    $('#inputDate').DatePicker({
        format:'m/d/Y',
        date: $('#inputDate').val(),
        current: $('#inputDate').val(),
        starts: 1,
        position: 'r',
        onBeforeShow: function(){
            $('#inputDate').DatePickerSetDate($('#inputDate').val(), true);
        },
        onChange: function(formated, dates){
            $('#inputDate').val(formated);

            if ($('#closeOnSelect input').prop('checked')) {
                $('#inputDate').DatePickerHide();
            }
        }
    });

    var now3 = new Date();
    now3.addDays(-4);
    var now4 = new Date()
    $('#widgetCalendar').DatePicker({
        flat: true,
        format: 'd B, Y',
        date: [new Date(now3), new Date(now4)],
        calendars: 3,
        mode: 'range',
        starts: 1,
        onChange: function(formated) {
            $('#widgetField span').get(0).innerHTML = formated.join(' &divide; ');
        }
    });
    var state = false;
    $('#widgetField>a').bind('click', function(){
        $('#widgetCalendar').stop().slideToggle();
        state = !state;
        return false;
    });
    $('#widgetCalendar').css({display: 'none', height: $('#widgetCalendar div.datepicker').get(0).offsetHeight+5});

});