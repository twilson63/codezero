require 'sinatra'
require 'forgery'
require 'json'

set :public_folder, File.dirname(__FILE__) + '/public'

get '/' do
  File.read(File.join('public', 'index.html'))
end

post '/generate' do
  { code: [Forgery::Basic.color, Forgery::Address.street_name.split(" ").first, rand(100)].join("-").downcase }.to_json
end
