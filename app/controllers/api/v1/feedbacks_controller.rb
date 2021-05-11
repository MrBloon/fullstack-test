class Api::V1::FeedbacksController < ApplicationController
  def index
    @infos = Info.all
    @messages = Message.all
    render json: [@infos, @messages]
  end

  def create
    if Info.exists?(email: params[:email])
      update
    else
      @info = Info.new(first_name: params[:first_name], last_name: params[:last_name], email: params[:email])
      @info.save!
    end
    @message = Message.new(content: params[:content])
    @message.info = Info.last
    @message.save!
    render json: [@info, @message]
  end

  def update
    @info = Info.find_by(email: params[:email])
    @info.update(first_name: params[:first_name], last_name: params[:last_name])
    @info.save!
  end

  # private

  # def info_params
  #   params.require(:info).permit(:first_name, :last_name, :email)
  # end

  # def message_params
  #   params.require(:message).permit(:content)
  # end

end
