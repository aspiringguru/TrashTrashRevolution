AFRAME.registerComponent('check-rubbish', {
  init: function () {
    console.log("AFRAME.registerComponent('check-rubbish' : init__");
    var el = this.el;  // <a-box>
    el.addEventListener('click', function () {
        var bin_type = el.getAttribute('name')
        console.log("click, name="+bin_type+", color="+el.getAttribute('color')+", position="+el.getAttribute('position'))
        var bin_type = el.getAttribute('name')
        var oldbox = document.getElementById('box1');
        var oldbox_type = oldbox.getAttribute('name')
        console.log("oldbox_type = "+ oldbox_type);
        if (bin_type == oldbox_type){
          console.log("correct bin.")
        } else {
          console.log("wrong bin.")
        }

    });
  }

});


  AFRAME.registerComponent('change-color-on-hover', {
    schema: {
      color: {default: 'red'},
      name: {default: 'blah'}
    },

    init: function () {
      console.log("init__")
      var data = this.data;
      var el = this.el;  // <a-box>
      var defaultColor = el.getAttribute('material').color;
      console.log("defaultColor:"+defaultColor)
      var defaultName = el.getAttribute('name');
      console.log("defaultName:"+defaultName)

      el.addEventListener('mouseenter', function () {
        console.log("mouseenter, color="+data.color+", name="+data.name+", data="+data)
        el.setAttribute('color', data.color);
      });

      el.addEventListener('mouseleave', function () {
        console.log("mouseleave, color="+data.color+", name="+data.name+", data="+data)
        el.setAttribute('color', defaultColor);
      });

      el.addEventListener('click', function () {
        console.log("click, name="+el.getAttribute('name')+", color="+el.getAttribute('color')+", position="+el.getAttribute('position'))
        //el.setAttribute('color', 'black');//
        var scene_ = document.getElementById("scene_1")
        var box = document.createElement('a-box')
        var oldbox = document.getElementById('box1')
        console.log("oldbox name = "+oldbox.getAttribute("name"))
        scene_.appendChild(box);
        scene_.removeChild(oldbox);
        console.log("box created and appended.")
        //animation="property: position; to: 5 1.6 0; dur: 1500; easing: linear"
        box.setAttribute("position", "0 2 -4")
        box.setAttribute("color", "red")
        box.setAttribute("property", "position; to: 5 1.6 0; dur: 1500; easing: linear")
        console.log("box set attributes.")
      });


    }
  });
