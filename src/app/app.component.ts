import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {

  }

  ngOnInit()
  {
    // example with VanillaJs
    const reasonInput = document.querySelector('#inputReason');
    const amountInput = document.querySelector('#inputAmount');
    const cancelButton = document.querySelector('#buttonCancel');
    const confirmButton = document.querySelector('#buttonConfirm');
    const expensesList = document.querySelector('#expensesList');
    const totalExpenses = document.querySelector('#totalExpenses');

    let totalExpensesValue = 0;

    const clear = () => {
      reasonInput.getElementsByTagName('input')[0].value = '';
      amountInput.getElementsByTagName('input')[0].value = '';
    }

    cancelButton.addEventListener('click', () => {
      clear();
    });

    confirmButton.addEventListener('click', () => {
      const enteredReason = reasonInput.getElementsByTagName('input')[0].value;
      const enteredAmount = amountInput.getElementsByTagName('input')[0].value;

      if (enteredReason.trim().length == 0) {
        return;
      }

      const newItem = document.createElement('ion-item');
      newItem.textContent = enteredReason + ': $ ' + enteredAmount;
      expensesList.appendChild(newItem);

      totalExpensesValue += +enteredAmount; console.log(totalExpensesValue);
      totalExpenses.innerHTML = "Total expense: " + totalExpensesValue.toString();
      clear();
    });
  }


}
