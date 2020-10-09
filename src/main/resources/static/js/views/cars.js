define(function () {
    return {
        rows: [
            {
                view: 'button',
                label: 'Main',
                click: function () {
                    routie('')
                }
            },
            {
                view: 'list',
                data: [
                    'car_1',
                    'car_2',
                    'car_3',
                ]
            }
        ]
    }
})