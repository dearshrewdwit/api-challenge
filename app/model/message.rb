require 'data_mapper'

class Message

  include DataMapper::Resource

  property :id, Serial
  property :contents, Text

end
