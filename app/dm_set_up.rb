require 'data_mapper'
require 'dm-postgres-adapter'

require_relative 'model/message'

DataMapper::Logger.new($stdout, :debug)
DataMapper.setup(:default, ENV['DATABASE_URL'] || "postgres://localhost/message_#{ENV['RACK_ENV']}")
DataMapper.finalize
