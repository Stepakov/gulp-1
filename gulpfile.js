
import gulp from "gulp"

import { path } from "./gulp/config/path.js"

// передаём значения в глобальной переменной
// будут другие файлы, кроме gulpfile.js в которых будем использовать переменные от сюда
global.app = {
    path: path,
    gulp: gulp
}

// импорт задач, import tasks
import { copy } from "./gulp/tasks/copy.js"
import { reset } from "./gulp/tasks/reset.js"
import { html } from "./gulp/tasks/html.js"

function watcher()
{
    gulp.watch( path.watch.files, copy )
    // gulp.watch( path.watch.files, reset )
    gulp.watch( path.watch.html, copy )
}

const mainTasks = gulp.parallel( copy, html )

const dev = gulp.series( reset, mainTasks, watcher )

gulp.task( 'default', dev )

