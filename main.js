// https://designer.webix.com/quickstart - UI Designer

var queue = new PrioretyQueue();

function tableUpdate() {
    $$("table").clearAll();
    $$("table").parse(queue.getData());
}

function toOutput(itemData) {
    let html = "";
    if (itemData !== undefined) {
        html = `<p>Value = ${itemData.value}</p><p>Priorety = ${itemData.priorety}</p>`;
    }
    $$("output").setHTML(html);
}

function addInQueue() {
    const value = $$("value").getValue();
    const priorety = $$("priorety").getValue();

    queue.add(value, priorety);

    $$("value").setValue("");
    $$("priorety").setValue("");
    tableUpdate();
}

function popFirstFromQueue() {
    const itemData = queue.popFirst();
    toOutput(itemData);
    tableUpdate();
}

function popLastFromQueue() {
    const itemData = queue.popLast();
    toOutput(itemData);
    tableUpdate();
}

webix.ready(() => {
    webix.ui({
        "cols": [
            {
                "autoheight": false,
                "view": "form",
                "rows": [
                    {
                        "id": "value",
                        "label": "Value",
                        "view": "text",
                        "height": 38
                    },
                    {
                        "id": "priorety",
                        "label": "Priorety",
                        "view": "text",
                        "height": 38,
                        "type": "number"
                    },
                    {
                        "label": "Add in queue",
                        "view": "button",
                        "height": 38,
                        "click": addInQueue
                    },
                    {
                        "height": 38,
                        "cols": [
                            {
                                "label": "Pop first from queue",
                                "view": "button",
                                "height": 0,
                                "click": popFirstFromQueue
                            },
                            {
                                "label": "Pop last from queue",
                                "view": "button",
                                "height": 38,
                                "click": popLastFromQueue
                            }
                        ]
                    },
                    {
                        "id": "output",
                        "view": "template"
                    }
                ]
            },
            {
                "id": "table",
                "data": queue.getData(),
                "columns": [
                    {"id": "value", "header": "Value", "fillspace": true},
                    {"id": "priorety", "header": "Priorety"}
                ],
                "view": "datatable"
            }
        ]
    });
});

