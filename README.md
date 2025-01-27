# JavaScript Null/Undefined Arithmetic Bug

This repository demonstrates a subtle bug in JavaScript related to null and undefined values in arithmetic operations. The function `foo` aims to add two numbers but returns null if either input is null. While this works as expected for explicit null values, it might lead to unexpected behavior when dealing with values that are implicitly treated as null or undefined in certain contexts.

## Bug Description

The primary issue is the implicit coercion of certain values (like undefined or NaN) to null during the comparison `a === null || b === null`. This can lead to unexpected null returns even when it's not intended.

## Solution

The solution utilizes stricter type checking to explicitly handle null, undefined, and NaN values, preventing implicit coercion and ensuring the function behaves as intended in all cases.