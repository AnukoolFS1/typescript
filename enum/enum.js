var naming;
(function (naming) {
    naming[naming["abc"] = 0] = "abc";
    naming[naming["abcd"] = 1] = "abcd";
})(naming || (naming = {}));
console.log(naming);
