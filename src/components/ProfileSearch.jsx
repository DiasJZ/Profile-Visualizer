import { useState } from "react";
import {userAPI} from './services/api2'
import { getUsersFromGitHub } from './services/api'
import apiUsers from "../services/Api2";

users.forEach(item =>{
  const profileContainer = document.getElementById('Profile-container')

  const profileImage = document.getElementsByClassName('Profile-image')
  
  const profileElement = document.importNode(template.content, true)

  const itens_profile = profileElement.querySelectorAll('span')

  itens_profile[0].innerText = apiUsers.user.login

  containerProfilesElement.append(profileElement)
})