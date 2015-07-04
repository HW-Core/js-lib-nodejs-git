console.time('git');

HWCPATH_ROOT="../../../../";

var HWCore=require(HWCPATH_ROOT+"kernel");

HWCore(function(){
    var $=this;
    $.Loader.load(["PATH_JS_LIB:nodejs/git/index.js"],function() {
        $.NodeJs.Git.exists(
                "../",
                function(res) {
                    console.log("should return true: "+res);
                }
        );

        $.NodeJs.Git.exists(
                "../unexistant/folder",
                function(res) {
                    console.log("should return false: "+res);
                }
        );

        $.NodeJs.Git.getCommitHash(
                "../../../common",
                function(res) {
                    console.log("should return the hash: "+res);
                }
        );

        console.timeEnd('git');
    });
});