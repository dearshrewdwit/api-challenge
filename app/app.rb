ENV['RACK_ENV'] = "development"

require 'json'
require 'sinatra/base'
require_relative 'dm_set_up'

class MessageBoard < Sinatra::Base

  get '/' do
    @messages = Message.all
    erb :messageboard
  end

  post '/jsonCreate' do
    message = request.body.read
    msg = Message.new(contents: message)
    msg.save
    p msg
  end

  get '/jsonRead' do
    messages = Message.all
    json = JSON.generate({'messages': messages})
  end

  post '/jsonDestroy' do
    message = request.body.read
    msg = Message.get(message)
    msg.destroy
  end

  post '/jsonUpdate' do
    message = request.body.read
    parsed_message = JSON.parse(message)
    msg = Message.get(parsed_message['message'][0].to_i)
    msg.update(contents: parsed_message['message'][1])
  end

  run! if app_file == $0
end
