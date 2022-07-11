module Queries
  class Books < Queries::BaseQuery

    type [ObjectTypes::Book], null: false

    def resolve
      ::Book.all.order(:id)
    end
  end
end
