class Library:
    def __init__(self, list_of_books):
        self.available_books = list_of_books

    def display_books(self):
        print("Available Books:")
        for book in self.available_books:
            print(book)

    def lend_book(self, book, student):
        if book in self.available_books:
            self.available_books.remove(book)
            student.borrowed_books.append(book)
            print(f"{book} has been borrowed by {student.name}")
        else:
            print(f"Sorry, {book} is currently not available.")

    def return_book(self, book, student):
        if book in student.borrowed_books:
            student.borrowed_books.remove(book)
            self.available_books.append(book)
            print(f"{book} has been returned by {student.name}")
        else:
            print(f"Sorry, {student.name} doesn't have {book}")


class Student:
    def __init__(self, name):
        self.name = name
        self.borrowed_books = []

    def borrow_book(self, library, book):
        library.lend_book(book, self)

    def return_book(self, library, book):
        library.return_book(book, self)


def main():
    library = Library(["Python Programming", "Data Science", "Machine Learning", "Artificial Intelligence"])
    student = Student("John Doe")

    while True:
        print("\nMenu:")
        print("1. Display available books")
        print("2. Borrow a book")
        print("3. Return a book")
        print("4. Exit")
        
        choice = int(input("Enter your choice: "))

        if choice == 1:
            library.display_books()
        elif choice == 2:
            book = input("Enter the name of the book to borrow: ")
            student.borrow_book(library, book)
        elif choice == 3:
            book = input("Enter the name of the book to return: ")
            student.return_book(library, book)
        elif choice == 4:
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
