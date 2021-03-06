/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

/**
 * Passes each element in the array, between the start and end indexes, to the given callback.
 *
 * @function Phaser.Utils.Array.EachInRange
 * @since 3.4.0
 *
 * @param {array} array - The array to search.
 * @param {function} callback - A callback to be invoked for each item in the array.
 * @param {object} context - The context in which the callback is invoked.
 * @param {integer} startIndex - The start index to search from.
 * @param {integer} endIndex - The end index to search to.
 * @param {...*} [args] - Additional arguments that will be passed to the callback, after the child.
 *
 * @return {array} The input array.
 */
var EachInRange = function (array, callback, context, startIndex, endIndex)
{
    var len = array.length;

    if (startIndex === undefined) { startIndex = 0; }
    if (endIndex === undefined) { endIndex = len; }

    if (endIndex > len)
    {
        endIndex = len;
    }

    if (startIndex < 0 || startIndex > len || startIndex >= endIndex)
    {
        throw new Error('Range Error: Values outside acceptable range');
    }

    var i;
    var args = [ null ];

    for (i = 5; i < arguments.length; i++)
    {
        args.push(arguments[i]);
    }

    for (i = startIndex; i < endIndex; i++)
    {
        args[0] = array[i];

        callback.apply(context, args);
    }

    return array;
};

module.exports = EachInRange;
