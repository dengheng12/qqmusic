$(function() {
    $(window).on("load", function() {
        $(".content_list").mCustomScrollbar();
    });

    console.log($(".content_list"))
    //鼠标移入事件
    $(".music_con").on("mouseenter",'.list_music',function() {
        $(this).find(".list_menu").stop().fadeIn(100)
        $(this).find(".list_time a").stop().fadeIn(100)
        $(this).find(".list_time span").stop().fadeOut(100)
    })
    //鼠标移出事件
    $(".music_con").on("mouseleave",'.list_music',function() {
        $(this).find(".list_time span").stop().fadeIn(100)
        $(this).find(".list_menu").stop().fadeOut(100)
        $(this).find(".list_time a").stop().fadeOut(100)
    })
    //选中事件
    $(".music_con").on("click",".list_check",function() {
        $(this).toggleClass("list_checked")
    })
    //播放事件
    $(".music_con").on("click",".list_menu_play",function() {
        //当前播放
       $(this).toggleClass("list_menu_play2");
       //复原其他播放
       $(this).parent(".list_music")
    })

    getMusic()
   //加载歌曲
   function getMusic(){
       $.ajax({
           url:"../source/musiclist.json",
           data:"",
           dataType:"json",
           success:function(data){
              console.log(data);
               var $ul=  $(".music_con")
              $.each(data,function(index,item){
                  var $item=createMusicItem(index,item);
                  $ul.append($item)
              })
           },
           err:function(e){
               console.log(e)
           }
       })
   }
   function createMusicItem(index,item){
       var html=`<li class="list_music">
       <div class="list_check"><i></i></div>
       <div class="list_number">${index+1}</div>
       <div class="list_name">${item.name}
           <div class="list_menu">
               <a href="javascript:;" class="list_menu_play" title="播放"></a>
               <a href="javascript:;" title="添加"></a>
               <a href="javascript:;" title="下载"></a>
               <a href="javascript:;" title="分享"></a>
           </div>
       </div>
       <div class="list_singer">${item.singer}</div>
       <div class="list_time">
           <span>${item.time}</span>
           <a href="javascript:;" title="删除"></a>
       </div>
   </li>`;
   return html;
   }

})