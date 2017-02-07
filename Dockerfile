## BUILDING
##   (from project root directory)
##   $ docker build -t ruby-for-squall0403-estimote .
##
## RUNNING
##   $ docker run -p 3000:3000 ruby-for-squall0403-estimote
##
## CONNECTING
##   Lookup the IP of your active docker host using:
##     $ docker-machine ip $(docker-machine active)
##   Connect to the container at DOCKER_IP:3000
##     replacing DOCKER_IP for the IP of your active docker host

FROM gcr.io/stacksmith-images/minideb-buildpack:jessie-r9

MAINTAINER Bitnami <containers@bitnami.com>

ENV STACKSMITH_STACK_ID="ocbgxrc" \
    STACKSMITH_STACK_NAME="Ruby for squall0403/Estimote" \
    STACKSMITH_STACK_PRIVATE="1"

# Install required system packages
RUN install_packages libc6 libssl1.0.0 zlib1g libreadline6 libncurses5 libtinfo5 libffi6 libxml2-dev zlib1g-dev libxslt1-dev libgmp-dev ghostscript imagemagick libmysqlclient18 libpq5

RUN bitnami-pkg install ruby-2.4.0-0 --checksum 189d7da38f702086231ddf371b41ddc8b29382147522d7dad399bbdb7944d958

ENV PATH=/opt/bitnami/ruby/bin:$PATH

## STACKSMITH-END: Modifications below this line will be unchanged when regenerating

# Ruby on Rails template
ENV RAILS_ENV=development

COPY Gemfile* /app/
WORKDIR /app

RUN bundle install --without production

COPY . /app

EXPOSE 3000

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0", "-p", "3000"]
