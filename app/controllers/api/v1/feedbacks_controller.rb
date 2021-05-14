class Api::V1::FeedbacksController < ApplicationController
  def index
    if params[:s].present?
      search_fields(params[:s])
    elsif params[:o].present? && params[:d].present?
      order_results(params[:o], params[:d])
    elsif params[:p].present? && params[:n].present?
      select_messages(params[:p], params[:n])
    else
      @messages = Message.order("created_at DESC")[0...10]
    end
    render json: [@infos, @messages]
  end

  def show
    @message = Message.find(params[:id])
    render json: @message
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

  private

  def search_fields(query)
    sql_query = "first_name ILIKE :s OR last_name ILIKE :s OR email ILIKE :s"
    @infos = Info.where(sql_query, s: "#{query}")
    @messages = Message.where("content ILIKE ?", "%#{query}%")
  end

  def order_results(column_name, order)
    if column_name == "content"
      @messages = Message.order("content")
      @messages = @messages.reverse if order == "desc"
    end
    fields = ["first_name", "last_name", "email"]
    fields.each do |field|
      if column_name == field
        @infos = Info.order(field)
        @infos = @infos.reverse if order == "desc"
      end
    end
  end

  def select_messages(page, number)
    page = page.to_i
    number = number.to_i
    @messages = Message.all
    counter = 0
    i = 0
    until counter == page
      selection = @messages[i...number]
      i += number
      number += number
      counter += 1
    end
    @messages = selection
  end

  # def info_params
  #   params.require(:info).permit(:first_name, :last_name, :email)
  # end

  # def message_params
  #   params.require(:message).permit(:content)
  # end

end
