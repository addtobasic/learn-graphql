module Mutations
  class CreateBook < Mutations::BaseMutation
    argument :params, InputTypes::Book, required: true

    field :book, ObjectTypes::Book, null: false

    def resolve(params:)
      book = Book.create!(params.to_h)

      {book: book}
    rescue => e
      GraphQL::ExecutionError.new(e.message)
    end
  end
end
