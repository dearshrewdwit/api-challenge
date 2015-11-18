require 'rubygems'
require File.join(File.dirname(__FILE__), 'app/app.rb')

use Rack::Static, :urls => ['/stylesheets', '/javascripts'], :root => 'public'

run MessageBoard
