

function throwpole(){
    sleep(1400);
    toastLog("等待1.4秒 找钓鱼台");
    //钓鱼台检测

    // 定义目标颜色和搜索区域
    var targetColor = "#ff00fcfc";
    var centerX = 1475;
    var centerY = 655;
    var searchRadius = 15; // 搜索半径30像素
    
    // 设置颜色相似度阈值（0~255，值越大容差越高）
    var colorThreshold = 8;
    
    // 计算搜索区域坐标范围
    var region = [
        centerX - searchRadius,
        centerY - searchRadius,
        searchRadius * 2,
        searchRadius * 2
    ];
    
    while (true) {
        // 截屏并创建临时图像对象
        var screen = captureScreen();
        
        // 在目标区域找色
        var point = findColor(screen, targetColor, {
            region: region,
            threshold: colorThreshold
        });
        
        // 找到颜色执行点击
        if (point) {
            click(point.x, point.y);
            toastLog("找到目标颜色并点击：" + point.x + "," + point.y);
            screen.recycle(); // 回收截图
            break;
        }
        
        // 未找到时持续检测
        screen.recycle(); // 回收截图避免内存泄漏
        sleep(100);
    }
    
    
    }
    
    function ifeat(){
        //钓鱼台后Boom
// 定义目标坐标和颜色
var baseX = 1484;
var baseY = 663;
var targetColor = "#fffee458";
var searchRadius = 50; // 搜索半径

// 定义颜色相似度阈值（0-255，建议4-12）
var colorThreshold = 8;

// 主循环
while (true) {
    // 截取屏幕
    var screen = captureScreen();
    
    // 在指定区域找色（以基准点为中心的矩形区域）
    var foundPoint = images.findColor(screen, targetColor, {
        region: [
            baseX - searchRadius, // x起始
            baseY - searchRadius, // y起始
            2 * searchRadius,     // 宽度
            2 * searchRadius      // 高度
        ],
        threshold: colorThreshold
    });

    // 如果找到目标颜色
    if (foundPoint) {
        click(foundPoint.x, foundPoint.y);
        toastLog("成功点击坐标：" + foundPoint.x + "," + foundPoint.y);
        screen.recycle();
        break;
    }
    
    // 未找到时处理
    sleep(500); // 降低CPU占用
}
    }
    


    
    function hit(){


 // 定义颜色参数
 const GREEN_COLOR = "#93c0b4";  // 去掉Alpha通道（参考网页2）
 const BLUE_COLOR = "#b3feff";
 const THRESHOLD = 5;            // 色差阈值
 
 // 定义检测区域（格式：[x, y, width, height]）
 const GREEN_REGION = [1265, 160, 10, 491];
 const BLUE_REGION = [1300, 160, 10, 570];

 // 持续监控
 while (true) {
     let imgzhaose = captureScreen();
     
     // 查找绿色区域Y值范围（参考网页7）
     let greenMinY = Infinity, greenMaxY = -Infinity;
     for (let x = GREEN_REGION[0]; x < GREEN_REGION[0] + GREEN_REGION[2]; x++) {
         for (let y = GREEN_REGION[1]; y < GREEN_REGION[1] + GREEN_REGION[3]; y++) {
             let pixelColor = images.pixel(imgzhaose, x, y);
             if (colors.isSimilar(pixelColor, GREEN_COLOR, THRESHOLD)) {
                 if (y < greenMinY) greenMinY = y;
                 if (y > greenMaxY) greenMaxY = y;
             }
         }
     }
     
     // 输出绿色Y值区间
     if (greenMinY !== Infinity) {  
     log("绿色区间：minY=" + greenMinY + ", maxY=" + greenMaxY); 
     } else {
         log("未检测到绿色区域");
     }

     // 查找蓝色区域Y值（参考网页41）
     let blueY = null;
     for (let x = BLUE_REGION[0]; x < BLUE_REGION[0] + BLUE_REGION[2]; x++) {
         for (let y = BLUE_REGION[1]; y < BLUE_REGION[1] + BLUE_REGION[3]; y++) {
             let pixelColor = images.pixel(imgzhaose, x, y);
             if (colors.isSimilar(pixelColor, BLUE_COLOR, THRESHOLD)) {
                 blueY = y;
                 break;
             }
         }
         if (blueY !== null) break;
     }

     // 判断逻辑
     if (blueY !== null) {
       log("蓝色Y值：" + blueY); 
         if (blueY >= greenMinY && blueY <= greenMaxY) {
             toast("判定蓝色在绿色区域内 ✅");
             click(1479,658);
             sleep(100);
         } else {
             toast("判定蓝色不在绿色区域内 ❌");
             sleep(100);
         }
     } else {
         log("未检测到蓝色区域");
         var screenbaise = captureScreen(); //截图
         var baiseX = 746;
         var baiseY = 234;
         var targetColorbaise = "#fff5f8fc"; //定义找色的颜色 白色
         var searchRadius = 5; // 搜索半径
         var colorThreshold = 8;//色差
         // 在指定区域找色（以基准点为中心的矩形区域）
         var foundPoint = images.findColor(screenbaise, targetColorbaise, {
             region: [
              baiseX - searchRadius, // x起始
              baiseY - searchRadius, // y起始
                 2 * searchRadius,     // 宽度
                 2 * searchRadius      // 高度
             ],
             threshold: colorThreshold
         });
     
         // 如果找到目标颜色
         if (foundPoint) {

          sleep(1500);
             click(1179,240);
             toastLog("成功点击坐标：❌");
             sleep(100);
             screenbaise.recycle();//清理找白色图片缓存
             sleep(100);
             toastLog("找到白色")
             sleep(100);
             return true;
           }
           else{
             sleep(100);
             return false;
           }

     }
     sleep(100); // 间隔1毫秒检测
 }











    }
    
    function sub(){

      var res = hit();
      if(res){
        main();
      }
      else{
        sub();
      }
    }
    
    


    function main(){
      if(count>1){
        sleep(150);
        toastLog("已执行了第"+count+"次");
        sleep(750);
      }
      toastLog("开始钓鱼");
      sleep(500);
      throwpole();
      ifeat();
      sleep(1500);
      var res = hit();;
      if(res){
        count++;
        main();
      }
      else{
        sleep(1500);
        sub();
      }
    }
   ;
   
    
    if (requestScreenCapture()) {
      var count = 0
        toast("请求截图 成功");
      sleep(5000);
      toast("准备执行")
      main();
    }
    else{
      toast("没在钓鱼台")
      exit();
    }
    