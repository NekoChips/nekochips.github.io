/*
 * Solo - A small and beautiful blogging system written in Java.
 * Copyright (c) 2010-present, b3log.org
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
/**
 * @fileoverview util and every page should be used.
 *
 * @author <a href="http://vanessa.b3log.org">Liyuan Li</a>
 * @version 0.1.0.0, Feb 27, 2019
 */

/**
 * @description 皮肤脚本
 * @static
 */
var Skin = {
    init: function () {
        Skin._initToc()
    },
    _initToc: function () {
        $('.entry-content p img:eq(0)').hide();
    },
    _initShare: function () {
    },
    initArticle: function () {
        Skin._initShare()
        Skin._initToc()
    },
}
Skin.init()