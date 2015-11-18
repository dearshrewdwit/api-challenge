begin
  require 'data_mapper'
  require './app/app.rb'
  rescue LoadError
end

namespace :db do

  desc 'Destructive upgrade'
  task :auto_migrate do
    DataMapper.auto_migrate!
    puts "Auto migrate complete (with data loss)"
  end

  desc 'Non-destructive upgrade'
  task :auto_upgrade do
    DataMapper.auto_upgrade!
    puts "Auto upgrade complete (no data loss)"
  end

end
