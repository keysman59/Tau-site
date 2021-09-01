Vue.component("modal", {
  template: "#modal-template"
  });
  new Vue({
  el: '#client',
  data: {
      rooms: 
      [
        {
          "room": 1,
          "squares": [
            {
              "square": 30.91,
              "queue": "Апартаменты - 2",
              "price": 17848215,
              "priceM": 577500,
              "img": "1-room-1",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 33.84,
              "queue": "Апартаменты - 2",
              "price": 19372255,
              "priceM": 572500,
              "img": "1-room-2",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 34.11,
              "queue": "Апартаменты - 2",
              "price": 20207805,
              "priceM": 592500,
              "img": "1-room-3",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 34.37,
              "queue": "Апартаменты - 2",
              "price": 22251985,
              "priceM": 647500,
              "img": "1-room-4",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 34.47,
              "queue": "Апартаменты - 2",
              "price": 23350715,
              "priceM": 677500,
              "img": "1-room-5",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 34.58,
              "queue": "Апартаменты - 2",
              "price": 22042200,
              "priceM": 637500,
              "img": "1-room-6",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 34.91,
              "queue": "Апартаменты - 2",
              "price": 22252575,
              "priceM": 637500,
              "img": "1-room-7",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 36.22,
              "queue": "Апартаменты - 2",
              "price": 20734805,
              "priceM": 572500,
              "img": "1-room-8",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 36.37,
              "queue": "Апартаменты - 2",
              "price": 23549575,
              "priceM": 647500,
              "img": "1-room-9",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 37.05,
              "queue": "Апартаменты - 2",
              "price": 22581975,
              "priceM": 609500,
              "img": "1-room-10",
              "deadLineYear": "2022",
              "deadLineQuarter": "II"
            },
            {
              "square": 38.03,
              "queue": "Апартаменты - 2",
              "price": 24241575,
              "priceM": 637500,
              "img": "1-room-11",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            }
          ]
        },
        {
          "room": 2,
          "squares": [
            {
              "square": 53.57,
              "queue": "Апартаменты - 2",
              "price": 34208525,
              "priceM": 638600,
              "img": "2-room-1",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 53.7,
              "queue": "Апартаменты - 1",
              "price": 34291543,
              "priceM": 638600,
              "img": "2-room-2",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 56.05,
              "queue": "Апартаменты - 1",
              "price": 33775730,
              "priceM": 602600,
              "img": "2-room-3",
              "deadLineYear": "2022",
              "deadLineQuarter": "II"
            },
            {
              "square": 56.79,
              "queue": "Апартаменты - 1",
              "price": 32004590,
              "priceM": 563600,
              "img": "2-room-4",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 57.03,
              "queue": "Апартаменты - 2",
              "price": 32424984,
              "priceM": 568600,
              "img": "2-room-5",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 57.36,
              "queue": "Апартаменты - 2",
              "price": 32326405,
              "priceM": 563600,
              "img": "2-room-6",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 57.46,
              "queue": "Апартаменты - 2",
              "price": 32382202,
              "priceM": 563600,
              "img": "2-room-7",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 64.52,
              "queue": "Апартаменты - 2",
              "price": 47651518,
              "priceM": 738600,
              "img": "2-room-8",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 71.17,
              "queue": "Апартаменты - 4",
              "price": 59957355,
              "priceM": 842500,
              "img": "2-room-9",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 71.66,
              "queue": "Апартаменты - 4",
              "price": 48625762,
              "priceM": 678600,
              "img": "2-room-10",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 77.81,
              "queue": "Апартаменты - 4",
              "price": 47742989,
              "priceM": 613600,
              "img": "2-room-11",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            }
          ]
        },
        {
          "room": 3,
          "squares": [
            {
              "square": 70.61,
              "queue": "Апартаменты - 5",
              "price": 41476314,
              "priceM": 587400,
              "img": "3-room-1",
              "deadLineYear": "2022",
              "deadLineQuarter": "II"
            },
            {
              "square": 76.02,
              "queue": "Апартаменты - 5",
              "price": 45533584,
              "priceM": 599000,
              "img": "3-room-2",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 82.29,
              "queue": "Апартаменты - 5",
              "price": 69325955,
              "priceM": 842500,
              "img": "3-room-3",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 83.62,
              "queue": "Апартаменты - 1",
              "price": 55939104,
              "priceM": 669000,
              "img": "3-room-4",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 84.95,
              "queue": "Апартаменты - 1",
              "price": 48455480,
              "priceM": 570400,
              "img": "3-room-5",
              "deadLineYear": "2022",
              "deadLineQuarter": "II"
            },
            {
              "square": 85.15,
              "queue": "Апартаменты - 1",
              "price": 57388404,
              "priceM": 674000,
              "img": "3-room-6",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 86.37,
              "queue": "Апартаменты - 1",
              "price": 58210684,
              "priceM": 674000,
              "img": "3-room-7",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 95.85,
              "queue": "Апартаменты - 1",
              "price": 66517124,
              "priceM": 694000,
              "img": "3-room-8",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 99.25,
              "queue": "Апартаменты - 1",
              "price": 58455894,
              "priceM": 589000,
              "img": "3-room-9",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 99.39,
              "queue": "Апартаменты - 1",
              "price": 61023004,
              "priceM": 614000,
              "img": "3-room-10",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 101.43,
              "queue": "Апартаменты - 2",
              "price": 64304084,
              "priceM": 634000,
              "img": "3-room-11",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 110.29,
              "queue": "Апартаменты - 2",
              "price": 70476588,
              "priceM": 639000,
              "img": "3-room-12",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 111.46,
              "queue": "Апартаменты - 2",
              "price": 70666908,
              "priceM": 634000,
              "img": "3-room-13",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 113.79,
              "queue": "Апартаменты - 2",
              "price": 93024960,
              "priceM": 817500,
              "img": "3-room-14",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 114.56,
              "queue": "Апартаменты - 2",
              "price": 74350738,
              "priceM": 649000,
              "img": "3-room-15",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 134.33,
              "queue": "Апартаменты - 3",
              "price": 87182766,
              "priceM": 649000,
              "img": "3-room-16",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            }
          ]
        },
        {
          "room": 4,
          "squares": [
            {
              "square": 112.61,
              "queue": "Апартаменты - 2",
              "price": 72518264,
              "priceM": 644000,
              "img": "4-room-1",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 131.93,
              "queue": "Апартаменты - 1",
              "price": 87601520,
              "priceM": 664000,
              "img": "4-room-2",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 141.6,
              "queue": "Апартаменты - 3",
              "price": 89775668,
              "priceM": 634000,
              "img": "4-room-3",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 155.38,
              "queue": "Апартаменты - 3",
              "price": 99287820,
              "priceM": 639000,
              "img": "4-room-4",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },
            {
              "square": 176.02,
              "queue": "Апартаменты - 2",
              "price": 112473585,
              "priceM": 639000,
              "img": "4-room-5",
              "deadLineYear": "2022",
              "deadLineQuarter": "IV"
            },      
            {
              "square":258.44,
              "queue":"Апартаменты - Виллы - 1",
              "price":348888600,
              "priceM":1350000,
              "img":"4-room-6",
              "deadLineYear":"2021",
              "deadLineQuarter":"III"
              },
              {
              "square":259.86,
              "queue":"Апартаменты - Виллы - 1",
              "price":350805600,
              "priceM":1350000,
              "img":"4-room-7",
              "deadLineYear":"2021",
              "deadLineQuarter":"III"
            }
          ]
        }
      ],
      roomsVills: 
      [
        {
          "room": 4,
          "squares": [ 
            {
              "square":258.44,"queue":"Виллы - 1 - 1",
              "price":348888600,
              "priceM":1350000,
              "img":"vills-1",
              "deadLineYear":"2021",
              "deadLineQuarter":"III"
              },
              {
              "square":259.86,
              "queue":"Виллы - 1 - 1",
              "price":350805600,
              "priceM":1350000,
              "img":"vills-2",
              "deadLineYear":"2021",
              "deadLineQuarter":"III"
            }
          ]
        }
      ],
  
  
      selectRoomIndex: 0,
      selectedRoom: null,
      selectSquareIndex: 0,
      selectedSquare: null,
      showApartament: true,
      showModal: false,
  },
  created: function () {
      this.onLoad()
  },
  methods: {
      setAltImg(event) { 
        event.target.src = "https://lamcdn.net/lookatme.ru/post_image-image/sIaRmaFSMfrw8QJIBAa8mA-small.png" 
      },
      changeTab(identificator) {
        if(identificator == 1) {
            this.showApartament = true;
        } else {
            this.showApartament = false;
        }
        this.onLoad();
      },
      openedModal() {
        if(this.showModal == false) {
            this.showModal = true;
            $(".scroll-down").css('zIndex', '10');
            $(document).ready(function(){
            if( window.innerWidth >= 922 ){
                $('#ex1').css("display", 'none');
                $('#ex2').css("display", 'block');
                $('#ex2').zoom();
                $('#ex2').hover(
                function(){
                    $(".img1").css('opacity', '0');
                },
                function(){
                    $(".img1").css('opacity', '1');
                }
                );
            } else {
                $('#ex2').css("display", 'none');
                $('#ex1').css("display", 'block');
                $('#ex1').zoom({ on:'grab' });
                    // $('#ex1').on("taphold",function(){
                    //     $(".img2").css('opacity', '0');
                    // });
                    $('#ex1').on("touchmove", function(e) {
                    $(".img2").css('opacity', '0');
                    });
                    $('#ex1').on("touchend", function(e) {
                    $(".img2").css('opacity', '1');
                    });        
                } 
            });
        } else {
            $(".scroll-down").css('zIndex', '16');
            this.showModal = false;
        }
      },
      onLoad: function () {
        this.selectRoomIndex = 0
        this.selectSquareIndex = 0
        if(this.showApartament == true) {
          this.selectedRoom = this.rooms[0].squares;
          this.selectedSquare = this.rooms[0].squares[0];
        } else {
          this.selectedRoom = this.roomsVills[0].squares;
          this.selectedSquare = this.roomsVills[0].squares[0];
        }
      },
      selectRoom(room) {
        if(this.showApartament == true) {
          this.selectRoomIndex = room
          this.selectedRoom = this.rooms[room].squares
          this.selectSquareIndex = 0
          this.selectedSquare = this.rooms[room].squares[0]
        } else {
          this.selectRoomIndex = roomsVills
          this.selectedRoom = this.roomsVills[room].squares
          this.selectSquareIndex = 0
          this.selectedSquare = this.roomsVills[room].squares[0]
        }
  
      },
      selectSquare(square) {
        this.selectSquareIndex = square
        this.selectedSquare = this.selectedRoom[square]
      }
    }
  });