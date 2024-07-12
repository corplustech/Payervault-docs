"use server"

const arr = [];
export default async function data(){
    arr.push("hey");
    return arr.length;
}