console.log('poc');
//var formidable=require('formidable');
var fs=require('fs');
//var path=require('path');
//var app=require('express');
//var spawn=require('spawn');
var sys= require('sys');
var http=require('http');
const child_process=require('child_process');
//const path='../Picture/vv.avi';
// function spawnffmpeg(exitCallback){
//     var args=['-i','pipe:0','-c:v','mjpeg','-ss','00:00:13','-vframes', '1', '-s', '100x80', 'thumbnail.jpg']
//     var ffmpeg=spawn('ffmpeg',args);
//     console.log('spawning.....')
//     ffmpeg.on('exit',exitCallback);
//     ffmpeg.stderr.on('data',function(data){
//         console.log('grep stderr: '+data);
//     });
//     return ffmpeg;
// }

// app.get('/',function(res){
//     const path='../Picture/vv.avi';
//     const stat=fs.statSync(path);

// })


http.createServer(function(request, response){
    
    //response.setHeader('Content-disposition', `inline; filename="vv.avi"`)

    var task=child_process.exec('ffmpeg -y -framerate 2 -i img-%02d.jpg vv.avi && ffmpeg -y -i vv.avi -i bg1.mp3 -c:v copy -c:a copy op.avi');
    task.stderr.on('data',function(data){
        console.log('stderr: '+data);
    })
    task.stdout.on('data',function(data){

        console.log('stdout: '+data);

        // response.end('',function(){
        //             });
    
    })

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');