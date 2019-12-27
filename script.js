var scheduleData = [{
  Id: 1,
  Subject: 'Explosion of Betelgeuse Star',
  StartTime: new Date(2019, 11, 23, 10, 30),
  EndTime: new Date(2019, 11, 23, 12, 0)
}, {
  Id: 2,
  Subject: 'Thule Air Crash Report',
  StartTime: new Date(2019, 11, 29, 9, 30),
  EndTime: new Date(2019, 11, 29, 15, 0)
}, {
  Id: 3,
  Subject: 'Blue Moon Eclipse',
  StartTime: new Date(2019, 11, 24, 11, 30),
  EndTime: new Date(2019, 11, 24, 13, 0)
}, {
  Id: 4,
  Subject: 'Meteor Showers in 2019',
  StartTime: new Date(2019, 11, 25, 9, 30),
  EndTime: new Date(2019, 11, 25, 11, 0)
}, {
  Id: 5,
  Subject: 'Meteor Showers',
  StartTime: new Date(2019, 11, 24, 13, 0),
  EndTime: new Date(2019, 11, 24, 14, 30)
}];
var data = [
  {
    OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
    ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
    ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
  },
  {
    OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
    ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
    ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
  },
  {
    OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
    ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
    ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
  },
  {
    OrderID: 10251, CustomerID: 'VICTE', EmployeeID: 3, OrderDate: new Date(8367642e5),
    ShipName: 'Victuailles en stock', ShipCity: 'Lyon', ShipAddress: '2, rue du Commerce',
    ShipRegion: 'CJ', ShipPostalCode: '69004', ShipCountry: 'France', Freight: 41.34, Verified: !0
  },
  {
    OrderID: 10252, CustomerID: 'SUPRD', EmployeeID: 4, OrderDate: new Date(8368506e5),
    ShipName: 'Suprêmes délices', ShipCity: 'Charleroi', ShipAddress: 'Boulevard Tirou, 255',
    ShipRegion: 'CJ', ShipPostalCode: 'B-6000', ShipCountry: 'Belgium', Freight: 51.3, Verified: !0
  },
  {
    OrderID: 10253, CustomerID: 'HANAR', EmployeeID: 3, OrderDate: new Date(836937e6),
    ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
    ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 58.17, Verified: !0
  },
  {
    OrderID: 10254, CustomerID: 'CHOPS', EmployeeID: 5, OrderDate: new Date(8370234e5),
    ShipName: 'Chop-suey Chinese', ShipCity: 'Bern', ShipAddress: 'Hauptstr. 31',
    ShipRegion: 'CJ', ShipPostalCode: '3012', ShipCountry: 'Switzerland', Freight: 22.98, Verified: !1
  },
  {
    OrderID: 10255, CustomerID: 'RICSU', EmployeeID: 9, OrderDate: new Date(8371098e5),
    ShipName: 'Richter Supermarkt', ShipCity: 'Genève', ShipAddress: 'Starenweg 5',
    ShipRegion: 'CJ', ShipPostalCode: '1204', ShipCountry: 'Switzerland', Freight: 148.33, Verified: !0
  },
  {
    OrderID: 10256, CustomerID: 'WELLI', EmployeeID: 3, OrderDate: new Date(837369e6),
    ShipName: 'Wellington Importadora', ShipCity: 'Resende', ShipAddress: 'Rua do Mercado, 12',
    ShipRegion: 'SP', ShipPostalCode: '08737-363', ShipCountry: 'Brazil', Freight: 13.97, Verified: !1
  },
  {
    OrderID: 10257, CustomerID: 'HILAA', EmployeeID: 4, OrderDate: new Date(8374554e5),
    ShipName: 'HILARION-Abastos', ShipCity: 'San Cristóbal', ShipAddress: 'Carrera 22 con Ave. Carlos Soublette #8-35',
    ShipRegion: 'Táchira', ShipPostalCode: '5022', ShipCountry: 'Venezuela', Freight: 81.91, Verified: !0
  },
  {
    OrderID: 10258, CustomerID: 'ERNSH', EmployeeID: 1, OrderDate: new Date(8375418e5),
    ShipName: 'Ernst Handel', ShipCity: 'Graz', ShipAddress: 'Kirchgasse 6',
    ShipRegion: 'CJ', ShipPostalCode: '8010', ShipCountry: 'Austria', Freight: 140.51, Verified: !0
  },
  {
    OrderID: 10259, CustomerID: 'CENTC', EmployeeID: 4, OrderDate: new Date(8376282e5),
    ShipName: 'Centro comercial Moctezuma', ShipCity: 'México D.F.', ShipAddress: 'Sierras de Granada 9993',
    ShipRegion: 'CJ', ShipPostalCode: '05022', ShipCountry: 'Mexico', Freight: 3.25, Verified: !1
  },
  {
    OrderID: 10260, CustomerID: 'OTTIK', EmployeeID: 4, OrderDate: new Date(8377146e5),
    ShipName: 'Ottilies Käseladen', ShipCity: 'Köln', ShipAddress: 'Mehrheimerstr. 369',
    ShipRegion: 'CJ', ShipPostalCode: '50739', ShipCountry: 'Germany', Freight: 55.09, Verified: !0
  },
  {
    OrderID: 10261, CustomerID: 'QUEDE', EmployeeID: 4, OrderDate: new Date(8377146e5),
    ShipName: 'Que Delícia', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua da Panificadora, 12',
    ShipRegion: 'RJ', ShipPostalCode: '02389-673', ShipCountry: 'Brazil', Freight: 3.05, Verified: !1
  },
  {
    OrderID: 10262, CustomerID: 'RATTC', EmployeeID: 8, OrderDate: new Date(8379738e5),
    ShipName: 'Rattlesnake Canyon Grocery', ShipCity: 'Albuquerque', ShipAddress: '2817 Milton Dr.',
    ShipRegion: 'NM', ShipPostalCode: '87110', ShipCountry: 'USA', Freight: 48.29, Verified: !0
  }];

//schedule initialization
var scheduleObj = new ej.schedule.Schedule({
  width: '100%',
  height: '650px',
  eventSettings: { dataSource: scheduleData },
  views: ['Day', 'Week', 'Month'],
});
scheduleObj.appendTo('#Schedule');

//grid initialization
var grid = new ej.grids.Grid({
  dataSource: data,
  allowSorting: true,
  allowFiltering: true,
  allowPaging: true,
  allowGrouping: true,
  pageSettings: { pageSize: 13 },
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal', newRowPosition: 'Top' },
  height: '400px',
  columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 150, },
    { field: 'OrderDate', headerText: 'Order Date', width: 140, format: 'yMd', textAlign: 'Right' },
    { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
    { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
  ],
  width: '100%'
});
grid.appendTo('#Grid');

// function for voice dictation
function startDictation() {
  if (window.hasOwnProperty('webkitSpeechRecognition')) {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.start();
    recognition.onresult = function (e) {
      recognition.stop();
      debugger;
      var voiceData = e.results[0][0].transcript;
      console.log(voiceData);
      fetchJSONFile("./modelSet.json", voiceData);
    };

    recognition.onerror = function (e) {
      recognition.stop();
    }

  }
}
function fetchJSONFile(path, voiceData) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var voice = voiceData;
        data = JSON.parse(httpRequest.responseText);
        flag = true;
        var processedArgs = voiceProcess(data, voiceData);
        performActionsBasedOnResult(processedArgs);
      }
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send();
}
function voiceProcess(data, voiceData) {
  var args = {};
  // Here we processed the voice data with json collection and return which action to perform
  if (flag) {
    var voiceArray = voiceData.split(/\s+|\./);
    data.forEach(element => {
      // Here we checking for control
      if (voiceArray.includes(element.control) && flag) {
        controlData = element;
        // Here we checking for actions
        element.actions.forEach(action => {
          if (voiceArray.includes(action) && flag) {
            actions = action;
            // Here we checking whether the action present in reducers key
            Object.keys(controlData.reducers).forEach(reducers => {
              if (reducers.includes(action) && flag) {
                //Here we checked whether the action contains any sub actions
                if (Object.keys(controlData.reducers[reducers]).length > 1) {
                  Object.keys(controlData.reducers[reducers]).forEach(ele => {
                    if (typeof (controlData.reducers[reducers][ele]) == 'object') {
                      controlData.reducers[reducers][ele].forEach(value => {
                        var requestType = ele;
                        if (voiceArray.includes(value) && flag) {
                          // Here we return argument based on the users voice
                          args = {
                            "control": controlData.control,
                            "action": controlData.reducers[reducers].action,
                            "data": { "requestType": requestType, "actionToPerform": value },
                          }
                          flag = false;
                        }
                      });
                    }
                  });
                } else {
                  args = {
                    // If action not contains any sub actions we just retured actions
                    "control": controlData.control,
                    "action": controlData.reducers[reducers].action,
                    "data": {},
                    "voiceArray": voiceArray
                  }
                  flag = false;
                }
              }
            });
          } else {
            console.log("Sorry the action not listed in action list");
          }
        });

      } else {
        console.log("Control not supported :(");
      }
    });
  }
  return args;
}
function performActionsBasedOnResult(processedArgs) {
  voiceArray = processedArgs.voiceArray;
  switch (processedArgs.control) {
    case 'grid':
      var tg = document.getElementsByTagName("HTML")[0];
      tg.scrollTop = 900;   //grid 
      switch (processedArgs.action) {
        case 'paging':
        case 'selection':
        case 'searching':
          performActions(processedArgs.action, voiceArray[voiceArray.length - 1]);
          break;
        case 'grouping':
        case 'sorting':
          arg1 = capitalizeFirstLetter(voiceArray[voiceArray.length - 1]);
          arg2 = capitalizeFirstLetter(voiceArray[voiceArray.length - 2]);
          performActions(processedArgs.action, `${arg2}${arg1}`);
          break;
      }
      break;
    case 'schedule':
      debugger;
      var tg = document.getElementsByTagName("HTML")[0];
      tg.scrollTop = 100;
      var scheduleObj = document.getElementById('Schedule').ej2_instances[0];
      switch (processedArgs.action) {
        case 'navigate':
          if (processedArgs.data.requestType == 'view') {
            scheduleObj.currentView = capitalizeFirstLetter(processedArgs.data.actionToPerform);
          } else if (processedArgs.data.requestType == 'date') {
            var count = (scheduleObj.currentView == "Month") ? 1 : scheduleObj.activeView.renderDates.length;
            var date = scheduleObj.selectedDate;
            if (processedArgs.data.actionToPerform == 'next') {
              date = (scheduleObj.currentView == "Month") ? date.setMonth(date.getMonth() + count) : date.setDate(date.getDate() + count);
            } else if (processedArgs.data.actionToPerform == 'previous') {
              date = (scheduleObj.currentView == "Month") ? date.setMonth(date.getMonth() - count) : date.setDate(date.getDate() - count);
            } else if (processedArgs.data.actionToPerform == 'today') {
              date = new Date().setHours(0, 0, 0, 0);
            }
            scheduleObj.selectedDate = new Date(date);
          }
          break;
        case 'windowOpen':
          scheduleObj.openEditor(scheduleObj.activeCellsData, 'Add')
          break;
        case 'refresh':
          scheduleObj.refresh();
          break;
        case 'addEvent':
          var srtDate = new Date().setHours(10, 0, 0, 0, 0);
          var endDate = new Date().setHours(13, 0, 0, 0, 0);
          var eventData = [{
            Id: 100,
            Subject: 'Testing event',
            StartTime: new Date(srtDate),
            EndTime: new Date(endDate)
          }];
          scheduleObj.addEvent(eventData);
          scheduleObj.dataBind();
          break;
        case 'showEvent':
          var listEvent = scheduleObj.getCurrentViewEvents();
          console.log(listEvent);
          break;
      }
  }
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Handled grid actions
function performActions(key, args) {

  switch (key) {
    case 'paging':
      grid.goToPage(parseInt(args));
      break;
    case 'grouping':
      if (grid.groupSettings.columns.length && grid.groupSettings.columns.includes(args)) {
        grid.ungroupColumn(capitalizeFirstLetter(args));
      } else {
        grid.groupColumn(capitalizeFirstLetter(args));
      }
      break;
    case 'ungrouping':
      if (grid.groupSettings.columns.length && grid.groupSettings.columns.includes(args)) {
        grid.ungroupColumn(capitalizeFirstLetter(args));
      }
      break;
    case 'searching':
      grid.search(args);
      break;
    case 'edit':
      grid.keyboardModule.keyAction({ action: 'f2', preventDefault: function () { }, target: grid.getContent().querySelectorAll('.e-row')[args] });
      break;
    case 'update':
      grid.editModule.updateRow();
      break;
    case 'delete':
      grid.deleteRow(grid.getContent().querySelectorAll('.e-row')[args]);
      break;
    case 'sorting':
      grid.sortColumn(args, 'Ascending', false);
      break;
    case 'selection':
      grid.selectRow(parseInt(args));
      break;
  }
}

var loader = document.getElementsByClassName('loading')[0];
var body = document.getElementsByTagName('body')[0];

function loaded(e) {
  setTimeout(function () {
    loader.classList.add("j-hide");
    body.classList.remove("j-scroll");
  }, 4000);
}
