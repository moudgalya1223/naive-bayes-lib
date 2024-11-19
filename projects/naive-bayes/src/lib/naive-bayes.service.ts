import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NaiveBayesService {
  private data: any;
  
  constructor() {
    this.data = {
      positive: [],
      negative: [],
    };
  }

  // Method to train the model
  train(data: any) {
    this.data = data;
  }

  // Method to classify new data
  classify(text: string) {
    // Basic Naive Bayes logic for classification
    const probPositive = this.data.positive.reduce((acc:any, word:any) => acc + text.includes(word), 0);
    const probNegative = this.data.negative.reduce((acc:any, word:any) => acc + text.includes(word), 0);
    
    return probPositive > probNegative ? 'positive' : 'negative';
  }

}
