module Types
  class MutationType < Types::BaseObject
    field :create_book, mutation: Mutations::CreateBook
    field :update_book, mutation: Mutations::UpdateBook
  end
end
