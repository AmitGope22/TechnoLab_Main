import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent {
  searchQuery: string = "";

  constructor(private http: HttpClient) {}

  search(): void {
    if (!this.searchQuery.trim()) {
      alert("Please enter a search term.");
      return;
    }

    console.log("Searching for:", this.searchQuery);
    // Implement search logic (e.g., call an API)
  }
}
