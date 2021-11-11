
import { Component } from '@angular/core';

@Component({
  selector : "app-register",
  templateUrl: "register.component.html"
})
export class RegisterComponent
{
   //Check if there any unsaved data etc. If yes then as for confirmation
    canExit() : boolean {

    if (confirm("Do you wish to leave this page?")) {
      return true
    }
    else
    {
      return false
    }
  }

}