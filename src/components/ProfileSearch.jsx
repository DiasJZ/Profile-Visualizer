import { useState } from "react";
import axios from 'axios'
import { getUsersFromGitHub } from './services/api'


let searchText = document.getElementById('Search-bar').value;
let searchBtn = document.getElementByID('searchBtn').addEventListener('click',search());

async function search(){
  let results = await axios.get(`https://api.github.com/users/${searchText}`)
  console.log(results);
}
